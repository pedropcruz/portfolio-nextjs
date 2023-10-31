import { tv } from "tailwind-variants"

const header = tv({
  slots: {
    wrapper:
      "fixed top-0 z-50 w-[calc(100%-300px)] border-b-2 border-black dark:border-white py-4 px-16 flex justify-between items-center",
    searchInputContainer: "w-full min-h-2 flex items-center relative px-4 py-1",
    searchInput:
      "w-full h-full outline-none border-none font-base focus:outline-none placeholder:transition-placeholder",
  },
})

export default header
