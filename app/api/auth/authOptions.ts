
// authOptions.ts
// This is useful for accessing auth session on the server

import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
	providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! // ! tells typescript compiler that we have actual value for the variable 
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async redirect( { baseUrl }) {
            return `${baseUrl}`
        }
    }
};