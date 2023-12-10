import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Mailgun, { MailgunClientOptions, MessagesSendResult } from "mailgun.js";
import prisma from "prisma";
import { auth } from "auth";
const formData = require("form-data");

// Function to create an email route with Mailgun
export default async function createEmailRoute(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check if the user is signed in
  const session = await auth(req, res);
  if (session && session.user.isActive) {
    const { name, domain: requestDomain } = req.query;
    // const reqDomain = requestDomain as string;

    try {
      // Check if the requested domain exists in the Prisma database
      const domainExists = await prisma.domains.findUnique({
        where: {
          domain: requestDomain as string,
        },
      });

      if (!domainExists) {
        res
          .status(400)
          .json({ error: "Domain does not exist in the database" });
        return;
      }

      // Validate the name for the beginning of an email
      const validNameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){0,2}$/;

      if (!validNameRegex.test(name as string)) {
        res
          .status(400)
          .json({ error: "Invalid name for the beginning of an email" });
        return;
      }

      // Create the email route with Mailgun
      const mailgun = new Mailgun(formData);

      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY!,
      });

      const routeData = {
        id: `${name}@${requestDomain}`,
        priority: 20,
        description: "Email route for " + session.user.email,
        expression: `match_recipient("${name}@${requestDomain}")`,
        action: [`forward(${session.user.email})`],
      };

      mg.routes
        .create(routeData)
        .then((data) => {
          // TODO: Add the route to the database
          res.status(200).json({ message: "Email route created successfully" });
        })
        .catch((err) => {
          // Handle the error and send an error response
          res.status(500).json({ error: "Error creating email route" });
        });
      // res.status(500).json({ error: "Error creating email route" });
      // return;
      // }
      // res.status(200).json({ message: "Email route created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  if (session && !session.user.isActive) {
    res.status(403).json("You need to subscribe before you can create routes.");
    return;
  }
  res.status(401).json("You must be signed in.");
}
