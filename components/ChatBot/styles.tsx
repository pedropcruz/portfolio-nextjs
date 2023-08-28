import { tv } from "tailwind-variants"

const chatbot = tv({
  slots: {
    card: "border-0 shadow-none p-0",
    cardHeader: "flex-row items-center gap-2 border-b-2 border-black",
    cardTitle: "text-sm font-bold",
    closeBtn: "ml-auto mt-0 h-auto mr-0 border-2 rounded-sm p-2 border-black",
    closeBtnIcon: "w-4 h-4",
    cardContent: "relative flex flex-col gap-2",
    dateTimeLabel:
      "text-sm bg-black text-white px-4 py-2 mt-4 inline-block mx-auto font-semibold",
  },
})

export default chatbot
