import { tv } from "tailwind-variants";

const dropdown = tv({
	slots: {
		dropdownMenuTrigger: "inline-flex items-center text-xs font-semibold gap-2",
		dropdownMenuItem: "text-sm font-semibold p-0 relative",
		link: "pointer-events-auto py-2 px-4",
	}
})

export default dropdown