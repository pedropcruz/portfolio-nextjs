import "./globals.css"

import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"

import { SideBarMenu } from "@/components/SidebarMenu"

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Pedropcruz Portfolio App",
  description: "Passionate Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SideBarMenu />
        <main className="p-4 sm:ml-[300px]">{children}</main>
      </body>
    </html>
  )
}
