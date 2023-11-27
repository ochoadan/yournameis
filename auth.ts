import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "@auth/core/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const config = {
    providers: [Google],
    adapter: PrismaAdapter(prisma),
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config)