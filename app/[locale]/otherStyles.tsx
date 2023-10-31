import { Roboto_Flex } from "next/font/google"
import { tv } from "tailwind-variants"

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const secondLayout = tv({
  slots: {
    body: `${roboto.className}`,
    sidebarSpace: "sm:ml-[300px]",
    mainWrapper: "px-16 pt-[90px] pb-[72px]",
    wrapper: "prose lg:prose-xl h-[calc(100vh-162px)] flex flex-col justify-center",
    headerIntro: `font-thin`,
    strongIntro: `font-semibold`,
  },
})

export default secondLayout
