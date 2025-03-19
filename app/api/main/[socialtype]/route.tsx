import prisma from "@/prisma/client";
import { Social } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { authOptions } from "../../auth/authOptions";

interface Props { params: { socialtype: keyof Social }}

export const Schema = z.object({
    url: z.string().url(),
})

export type SchemaType = z.infer<typeof Schema>

export async function PUT(request: NextRequest, { params } : Props) {
    // Authorize user before granting access to resources
    const session = await getServerSession(authOptions)
    
    if(!session)
        return NextResponse.json({error: "user not authenticated, deny access to resources"}, { status: 400 })
    
    const { socialtype } = await params
    // Get the body
    const body = await request.json() as SchemaType
    // Validate the request
    const validation = Schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status : 400})

    // Get data from the body
    const { url } = body

    // get record from the user database
    const user = await prisma.user.findUnique({
        where: {
            email: process.env.WILL_EMAIL
        } 
    })
    
    // check if the record exists
    if(!user) {
        return NextResponse.json({ error: "Admin user does not exist" })
    }
    
    // get record from info database
    const social = await prisma.social.findUnique({
        where: {
            email: process.env.WILL_EMAIL
        }
    })

    // check if record exists. If not, create a record with NULL cols
    if (!social) {
        await prisma.social.create({
            data: {
                email: process.env.WILL_EMAIL!
            }
        })
    }

    // Update record
    const update = await prisma.social.update({
        where: {
            email: process.env.WILL_EMAIL
        },
        data: {
            [socialtype]: url
        }
        
    })
    
    return NextResponse.json(update)    
}