import { Roboto_Flex } from "next/font/google"
import { tv } from "tailwind-variants"

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const adminLayout = tv({
  slots: {
    body: `${roboto.className} dark:bg-darkPatternBgForLoginLayout bg-lightPatternBgForLoginLayout bg-cover bg-no-repeat bg-top`,
    wrapper: `grid grid-cols-12 min-h-screen`,
    halfWidth:
      "col-start-3 col-span-8 sm:col-start-2 sm:col-span-8 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-4 py-12",
    header: "my-24",
    paragraph: "text-grey-500 dark:text-white/50 mt-1",
    formStyles: "",
    inputWithLabel: "my-6",
    input: "p-7 rounded-sm dark:bg-black",
    submitButton: "border border-black dark:border-black dark:text-black w-full",
    wrapCheckboxAndAnchor: "flex items-center justify-between my-6",
    checkboxWrapper: "flex items-center gap-3",
    checkboxLabel: "font-semibold",
    anchor: "font-semibold hover:opacity-40",
    createAccountParagraph: "text-black dark:text-white mt-24",
    nameWrapper: "grid grid-cols-2 gap-4",
    errorMessage: "text-red-500",
  },
})

export default adminLayout
