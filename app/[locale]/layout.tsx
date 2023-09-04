import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"
import { tv } from "tailwind-variants"

import { SideBarMenu } from "@/components/SidebarMenu"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

import Providers from "@/app/[locale]/providers";

import "@/app/globals.css"

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
    body: `${roboto.className} dark:bg-darkPatternBg bg-lightPatternBg bg-cover bg-no-repeat bg-top`,
  },
})()

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  return (
    <html 
      lang="en"
      style={{ colorScheme: 'light' }}
    >
      <body className={body()}>
        <Providers params={{ locale }}>
          <SideBarMenu />
          <div className="sm:ml-[300px]">
            <Header />
            <main className="px-16 py-32">
              { children }
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
