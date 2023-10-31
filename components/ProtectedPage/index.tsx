"use client"

import { useEffect } from "react"

const requireAuth = () => {
  const loggedIn = document.cookie.includes("logged-in=true")

  if (!loggedIn) {
    window.location.href = "/admin/login"
  }
}

export const AuthpageInvisible = () => {
  useEffect(() => {
    requireAuth()
  }, [])

  return <></>
}
