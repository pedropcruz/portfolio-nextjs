import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { ZodError } from "zod"

import { getErrorResponse } from "@/lib/helpers"
import prisma from "@/lib/prisma"
import { RegisterUserInput, RegisterUserSchema } from "@/lib/validations/user.schema"

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as RegisterUserInput
    const data = RegisterUserSchema.parse(body)

    const hashedPassword = await hash(data.password, 12)

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
      },
    })

    return new NextResponse(JSON.stringify({ status: "success", data: { user: { ...user, password: undefined } } }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, "failed validations", error)
    }

    if (error.code === "P2002") {
      return getErrorResponse(409, "user with that email already exists")
    }

    return getErrorResponse(500, error.message)
  }
}
