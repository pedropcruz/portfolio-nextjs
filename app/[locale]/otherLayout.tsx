import type { Metadata } from "next"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { SideBarMenu } from "@/components/SidebarMenu"
import Providers from "@/app/providers"

import "@/app/globals.css"

import secondLayout from "./otherStyles"

export const metadata: Metadata = {
  title: "Pedropcruz Portfolio App",
  description: "Passionate Frontend Developer",
}

const { body, mainWrapper, sidebarSpace } = secondLayout()

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }]
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} style={{ colorScheme: "light" }} className={body()}>
      <body className={body()}>
        <Providers params={{ locale }}>
          <SideBarMenu />
          <div className={sidebarSpace()}>
            <Header />
            <main className={mainWrapper()}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
