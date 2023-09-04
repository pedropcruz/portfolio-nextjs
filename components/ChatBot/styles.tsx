import { tv } from "tailwind-variants"

const chatbot = tv({
  slots: {
    card: "relative shadow-none p-0 max-w-[500px] bg-white dark:bg-black rounded-sm border-2 border-black dark:border-white overflow-hidden",
    cardHeader: "flex-row items-center gap-2 border-b-2 border-black dark:border-white",
    cardTitle: "text-sm font-bold",
    closeBtn: "ml-auto mt-0 h-auto mr-0 p-2",
    closeBtnIcon: "w-4 h-4 dark:text-white text-black",
    cardContent: "relative flex flex-col gap-2 h-[500px] overflow-y-auto py-8",
    dateTimeLabel:
      "text-sm font-light text-xs text-black dark:text-white",
    botContentMessage: "flex flex-col items-start",
    botName: "flex items-start text-xs font-bold gap-4",
    botImageContainer: "inline-block order-none",
    botImage: "w-10 h-10",
    botMessage:
      "-mt-4 ml-14 bg-lightBg dark:bg-white dark:bg-opacity-25 text-black dark:text-white p-3 relative overflow-hidden mb-2 text-sm font-semibold before:content-[attr(before)] before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparent before:border-t-white dark:before:border-t-black before:border-l-white dark:before:border-l-black before:absolute before:top-0 before:left-0",
    buttonGroup: "flex flex-col gap-2 items-end w-full mb-2",
  },
})

export default chatbot
