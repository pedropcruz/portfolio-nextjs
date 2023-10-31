import { jwtVerify, SignJWT } from "jose"

import { getEnvVariable } from "./helpers"

export const signJWT = async (payload: { sub: string }, options: { exp: string }) => {
  try {
    const secret = getEnvVariable("JWT_SECRET_KEY")
    return new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(new TextEncoder().encode(secret))
  } catch (error) {
    throw error
  }
}

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (await jwtVerify(token, new TextEncoder().encode(getEnvVariable("JWT_SECRET_KEY")))).payload as T
  } catch (error) {
    console.log(error)
    throw new Error("Token expired.")
  }
}
