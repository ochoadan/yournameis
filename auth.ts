import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/prisma";
import EmailProvider from "@auth/core/providers/email";
import Stripe from "stripe";

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: Number(process.env.EMAIL_SERVER_PORT),
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  session: { strategy: "jwt" },
  // events: {
  //   createUser: async ({ user }) => {
  //     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  //       apiVersion: "2023-10-16",
  //     });

  //     await stripe.customers
  //       .create({
  //         email: user.email!,
  //         name: user.name!,
  //       })
  //       .then(async (customer) => {
  //         return prisma.user.update({
  //           where: { id: user.id },
  //           data: {
  //             stripeCustomerId: customer.id,
  //           },
  //         });
  //       });
  //   },
  // },
  // callbacks: {
  //   async session({ session, user }) {
  //     if (session?.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
