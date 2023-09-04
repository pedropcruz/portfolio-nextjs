import { tv } from "tailwind-variants"

const sidebar = tv({
  slots: {
    base: "fixed top-0 left-0 z-40 w-[300px] h-screen transition-transform -translate-x-full sm:translate-x-0",
    wrapper: "h-full px-4 pt-8 pb-4 overflow-y-auto bg-black flex flex-col gap-3",
    logo: "flex items-center",
    logoImg: "h-6 mr-3 sm:h-7",
    list: "mt-8 flex flex-col gap-4 flex-1",
    itemList:
      "text-white flex w-full items-center cursor-pointer rounded-sm gap-1 pl-4 pr-8 py-2 font-bold hover:bg-[#161616] hover:text-primary-500 text-sm bg-transparent justify-start",
    itemLabel: "ml-3",
    chatbotImg: "w-6 h-6 mr-4",
    popoverContent: "min-w-[500px] shadow-none p-0",
  },
})

export default sidebar
