import { auth } from "auth";
import nodemailer from "nodemailer";

export const GET = auth(async (request) => {
  if (request.auth) {
    const { name, email, company, message } = await request.json();

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    let mailOptions = {
      from: "contact-form@halfnine.com",
      to: "dan@halfnine.tech",
      subject: `Domain Request From ${request.auth.user?.name}`,
      text: message + " | Sent from: " + email,
      html: `<div>Message From: ${
        request.auth
      }</div><p>Company: ${Response.json({ data: "Protected data" })}</p>`,
    };
    try {
      await transporter.sendMail(mailOptions);
      return new Response("Success", {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
      return new Response("Error", {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    // return Response.json({ data: "Protected data" });
  }
  return Response.json({ message: "Not authenticated" }, { status: 401 });
}) as any;
