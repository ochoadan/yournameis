import mg from "@/utils/mailgun";
import prisma from "@/utils/prisma";
import { auth } from "auth";

export const POST = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    if (req.auth.user.isActive === false) {
      return Response.json(
        { message: "You need to subscribe before you can create routes." },
        { status: 402 }
      );
    }

    const userCreatedRoute = await prisma.emailRoutes.findMany({
      where: {
        createdById: req.auth.user.id,
      },
    });
    if (userCreatedRoute.length > 0) {
      return Response.json(
        { message: "You have already created a route" },
        { status: 403 }
      );
    }

    const { name, domain: requestDomain, key } = await req.json();

    if (!name || !requestDomain || !key) {
      return Response.json(
        { message: "Name, domain, and key are required." },
        { status: 422 }
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
        { status: 422 }
      );
    }

    const validNameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){0,2}$/;

    if (!validNameRegex.test(name as string)) {
      return Response.json(
        { message: "Invalid name for the beginning of an email." },
        { status: 422 }
      );
    }

    const routeExists = await prisma.emailRoutes.findUnique({
      where: {
        fromEmail: `${name}@${requestDomain}`,
      },
    });
    if (routeExists) {
      return Response.json(
        { message: "Email route already exists, please try another name" },
        { status: 409 }
      );
    }

    const routeData = {
      priority: 20,
      description: "VirtuaByte Email route for " + req.auth.user.email,
      expression: `match_recipient("${name}@${requestDomain}")`,
      action: [`forward("${req.auth.user.email}")`, "stop()"],
    };

    try {
      const mailgunResponse = await mg.routes.create(routeData);
      const data = mailgunResponse as any;

      const createdRoute = (await prisma.emailRoutes.create({
        data: {
          id: `${name}@${requestDomain}`,
          fromEmail: `${name}@${requestDomain}`,
          toEmail: req.auth!.user.email,
          description: data.description,
          created_at: new Date(data.created_at),
          createdById: req.auth!.user.id,
        },
      })) as any;

      return Response.json(
        { message: "Email route created successfully", route: createdRoute },
        { status: 201 }
      );
    } catch (error) {
      // await mg.routes.destroy(`${name}@${requestDomain}`);

      return Response.json(
        { message: "Email route create error" },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}) as any;
