import { NextRequest, NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { ZodError } from "zod"

import { getEnvVariable, getErrorResponse } from "@/lib/helpers"
import prisma from "@/lib/prisma"
import { signJWT } from "@/lib/token"
import { LoginUserInput, LoginUserSchema } from "@/lib/validations/user.schema"

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as LoginUserInput
    const data = LoginUserSchema.parse(body)

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (!user || !(await compare(data.password, user.password))) {
      return getErrorResponse(401, "Invalid email or password")
    }

    const JWT_EXPIRES_IN = getEnvVariable("JWT_EXPIRES_IN")

    const token = await signJWT(
      {
        sub: user.id.toString(),
      },
      { exp: `${JWT_EXPIRES_IN}m` }
    )

    const maxAge = parseInt(JWT_EXPIRES_IN) * 60

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge,
    }

    const response = new NextResponse(
      JSON.stringify({
        status: "success",
        token,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    await Promise.all([
      response.cookies.set(cookieOptions),
      response.cookies.set({
        name: "logged-in",
        value: "true",
        maxAge,
      }),
    ])

    return response
  } catch (e) {
    if (e instanceof ZodError) {
      return getErrorResponse(400, "failed validations", e)
    }

    return getErrorResponse(500, e.message)
  }
}
