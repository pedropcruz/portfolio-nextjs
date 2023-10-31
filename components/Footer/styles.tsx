import { tv } from "tailwind-variants"

const footer = tv({
  slots: {
    wrapper: "flex z-50 w-[calc(100%-300px)] items-center px-20 fixed bottom-0 flex-1",
    footerLink: "text-xs font-semibold text-black dark:text-white ml-8",
    itemsList: "flex items-center w-full",
  },
})

export default footer
