import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const social = await prisma.social.findUnique({
        where: {
            email: process.env.WILL_EMAIL
        }
    })

    return NextResponse.json(social)
}