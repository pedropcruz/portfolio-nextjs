import "./globals.css"

import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"
import { tv } from "tailwind-variants"

import { SideBarMenu } from "@/components/SidebarMenu"

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Pedropcruz Portfolio App",
  description: "Passionate Frontend Developer",
}

const { body } = tv({
  slots: {
    body: `${roboto.className} bg-lightBg`,
  },
})()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={body()}>
        <SideBarMenu />
        <main className="p-4 sm:ml-[300px]">{children}</main>
      </body>
    </html>
  )
}
