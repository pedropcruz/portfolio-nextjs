import { NextRequest, NextResponse } from "next/server"

import { getErrorResponse } from "@/lib/helpers"
import { verifyJWT } from "@/lib/token"

interface IAuthenticatedRequest extends NextRequest {
  user: {
    id: string
  }
}

let redirectToLogin = false
export async function middleware(req: NextRequest) {
  let token: string | undefined
  const defaultLocale = req.headers.get("x-default-locale") || "en"

  if (req.cookies.has("token")) {
    token = req.cookies.get("token")?.value
  } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7)
  }

  if (req.nextUrl.pathname.startsWith("/en") || req.nextUrl.pathname.startsWith("/pt")) {
    return
  }

  if (req.nextUrl.pathname.startsWith("/admin") && (!token || redirectToLogin)) return

  console.log(!token)
  console.log(req.nextUrl.pathname, req.nextUrl.pathname.startsWith("/api/users"))

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/api/users") || req.nextUrl.pathname.startsWith("/api/auth/logout"))
  ) {
    return
  }

  const response = NextResponse.next()

  try {
    if (token) {
      const { sub } = await verifyJWT<{ sub: string }>(token)
      response.headers.set("X-USER-ID", sub)
      ;(req as IAuthenticatedRequest).user = { id: sub }
    }
  } catch (error) {
    redirectToLogin = true

    if (req.nextUrl.pathname.startsWith("/api")) {
      return getErrorResponse(401, "Token is invalid or user doesn't exist")
    }

    return NextResponse.redirect(new URL(`/admin/login?${new URLSearchParams({ error: "badauth" })}`, req.url))
  }

  const authUser = (req as IAuthenticatedRequest).user

  if (!authUser) {
    return NextResponse.redirect(
      new URL(`/admin/login?${new URLSearchParams({ error: "badauth", forceLogin: "true" })}`, req.url)
    )
  }

  if (req.url.includes("/login") && authUser) {
    return NextResponse.redirect(new URL("/en", req.url))
  }

  response.headers.set("x-default-locale", defaultLocale)

  return response
}

export const config = {
  matcher: ["/admin/login", "/api/users/:path*", "/api/auth/logout"],
}
