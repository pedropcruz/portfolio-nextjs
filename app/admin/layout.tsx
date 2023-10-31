"use client"

import Image from "next/image"

import "@/app/globals.css"

import { Toaster } from "@/components/ui/toaster"
import adminLayout from "@/app/admin/styles"
import Providers from "@/app/providers"

const { body, wrapper, halfWidth } = adminLayout()

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body className={body()}>
        <Providers params={{ locale: "en" }}>
          <main className={wrapper()}>
            <div className={halfWidth()}>
              <Image src="/logo_light.svg" width={100} height={22} alt="logo" />
              {children}
            </div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
