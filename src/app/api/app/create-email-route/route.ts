import { NextApiRequest, NextApiResponse } from "next";
import Mailgun from "mailgun.js";
import prisma from "prisma";
import { auth } from "auth";
import formData from "form-data";

export const POST = auth(async (req) => {
  if (req.auth) {
    try {
      // Has subscription activated
      if (!req.auth.user.isActive) {
        return Response.json(
          { message: "You need to subscribe before you can create routes." },
          { status: 402 } // Payment Required
        );
      }

      // Has created a route already
      const userCreatedRoute = await prisma.emailRoutes.findMany({
        where: {
          // toEmail: session.user.email,
          userId: req.auth.user.id,
          // fromEmail: `${name}@${requestDomain}`,
        },
      });

      if (userCreatedRoute) {
        return Response.json(
          { message: "You have already created a route" },
          { status: 403 } // Forbidden
        );
      }

      // Validating domain
      const { name, domain: requestDomain } = req.nextUrl.searchParams.get(
        "query"
      ) as any;

      // Validate name and domain
      if (!name || !requestDomain) {
        return Response.json(
          { message: "Name and domain are required." },
          { status: 422 } // Unprocessable Entity
        );
      }

      const domainExists = await prisma.domains.findUnique({
        where: {
          domain: requestDomain as string,
        },
      });

      if (!domainExists) {
        return Response.json(
          { message: "Domain does not exist in the database." },
          { status: 422 } // Unprocessable Entity
        );
      }

      // Validating name
      const validNameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){0,2}$/;

      if (!validNameRegex.test(name as string)) {
        return Response.json(
          { message: "Invalid name for the beginning of an email." },
          { status: 422 } // Unprocessable Entity
        );
      }

      // Validating route
      const routeExists = await prisma.emailRoutes.findUnique({
        where: {
          fromEmail: `${name}@${requestDomain}`,
        },
      });

      if (routeExists) {
        return Response.json(
          { message: "Email route already exists, please try another name" },
          { status: 409 } // Conflict
        );
      }

      // Creating route
      const mailgun = new Mailgun(formData);

      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY!,
      });

      const routeData = {
        id: `${name}@${requestDomain}`,
        priority: 20,
        description: "Email route for " + req.auth.user.email,
        expression: `match_recipient("${name}@${requestDomain}")`,
        action: [`forward(${req.auth.user.email})`],
      };

      mg.routes
        .create(routeData)
        .then(async (data) => {
          try {
            await prisma.emailRoutes.create({
              data: {
                id: data.id,
                fromEmail: `${name}@${requestDomain}`,
                toEmail: req.auth!.user.email,
                description: data.description,
                expression: data.expression,
                actions: data.actions,
                created_at: data.created_at,
                priority: data.priority,
                user: {
                  connect: {
                    id: req.auth!.user.id,
                  },
                },
              },
            });
            return Response.json(
              { message: "Email route created successfully" },
              { status: 200 } // OK
            );
          } catch (error) {
            return Response.json(
              { message: "Error creating email route in the database" },
              { status: 500 } // Internal Server Error
            );
          }
        })
        .catch(() => {
          return Response.json(
            { message: "Error creating email route" },
            { status: 500 } // Internal Server Error
          );
        });
    } catch (error) {
      return Response.json(
        { message: "Internal server error" },
        { status: 500 } // Internal Server Error
      );
    }
  }
  return Response.json({ data: "Not authenticated" }), { status: 401 }; // Unauthorized
}) as any;
