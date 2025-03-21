import prisma from "@/prisma/client"
import { NextResponse } from "next/server"

export async function GET() {
    const social = await prisma.social.findUnique({
        where: {
            email: process.env.WILL_EMAIL
        }
    })

    return NextResponse.json(social)
}