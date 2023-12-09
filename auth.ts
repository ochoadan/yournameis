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
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      session!.user!.id = user.id;
      session!.user!.stripeCustomerId = user.stripeCustomerId;
      session!.user!.isActive = user.isActive;
      // session!.user!.isAllowedToSignIn = user.isAllowedToSignIn; // TODO: Fix Allow, Doesn't allow to create account
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // if (!user.isAllowedToSignIn) { return null; } // TODO: Fix Allow, Doesn't allow to create account
      return true;
    },
  },
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-10-16",
      });

      await stripe.customers
        .create({
          email: user.email!,
          name: user.name!,
        })
        .then(async (customer) => {
          return prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id,
            },
          });
        });
    },
  },
  // session: { strategy: "jwt" }, // TODO: Fix, Breaking on session callback
} as NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
