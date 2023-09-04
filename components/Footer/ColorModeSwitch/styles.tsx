import { tv } from "tailwind-variants";

const colorModeSwitch = tv({
	slots: {
		switcher: "select-none cursor-pointer p-4 rounded-sm bg-transparent text-black",
		input: "hidden h-0 w-0",
		toggleContainer: "flex items-center justify-center border-2 rounded-md border-black dark:border-white transition-colors",
		icon: "p-2 text-4xl",
		iconLight: "relative overflow-hidden rounded-sm  text-black dark:text-white bg-primary-500 dark:bg-transparent",
		iconDark: "relative overflow-hidden rounded-sm  text-black dark:text-white bg-transparent dark:bg-primary-500",
	}
})

export default colorModeSwitch