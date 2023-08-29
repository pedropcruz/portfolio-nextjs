import { tv } from "tailwind-variants"

const chatbot = tv({
  slots: {
    card: "border-0 shadow-none p-0",
    cardHeader: "flex-row items-center gap-2 border-b-2 border-black",
    cardTitle: "text-sm font-bold",
    closeBtn: "ml-auto mt-0 h-auto mr-0 border-2 rounded-sm p-2 border-black",
    closeBtnIcon: "w-4 h-4",
    cardContent: "relative flex flex-col gap-2 h-[500px] overflow-y-auto",
    dateTimeLabel:
      "text-sm bg-black text-white px-4 py-2 mt-4 inline-block mx-auto font-semibold",
    botContentMessage: "flex flex-col items-start",
    botName: "flex items-start text-xs font-bold gap-4",
    botImageContainer: "inline-block order-none",
    botImage: "w-10 h-10",
    botMessage:
      "ml-14 bg-primary-500 shadow text-black p-3 relative overflow-hidden mb-2 shadow-lg text-sm font-semibold",
  },
})

export default chatbot
