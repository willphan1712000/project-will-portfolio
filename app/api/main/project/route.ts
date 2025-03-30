import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../auth/authOptions"
import { z } from "zod"
import prisma from "@/prisma/client"

const urlSchema = z.object({
    name: z.string(),
    url: z.string().url()
})

const urlsSchema = z.array(urlSchema)

export type ProjectSchameType = {
    urlObj: z.infer<typeof urlsSchema>
}

export async function PUT(request: NextRequest) {
    // Verify authentication
    const session = await getServerSession(authOptions)
    if (!session)
        return NextResponse.json({ error : "user not authenticated, deny access to resources"}, { status: 400 })

    if (session.user?.email !== process.env.WILL_EMAIL)
        return NextResponse.json({ error: "Wrong user, deny access to resources" },  { status: 400 })

    // Validate body
    const body = await request.json() as ProjectSchameType
    const validation = urlsSchema.safeParse(body.urlObj)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    // Get data from the body
    const urlsObj = body.urlObj.map(url => ({...url, email: process.env.WILL_EMAIL!}))

    // Delete all previous records from project database
    await prisma.project.deleteMany({
        where: {
            email: process.env.WILL_EMAIL
        }
    })

    // Add new record
    const projects = await prisma.project.createMany({
        data: urlsObj
    })

    return NextResponse.json(projects)
}

export async function GET() {
    const projects = await prisma.project.findMany()

    return NextResponse.json(projects)
}