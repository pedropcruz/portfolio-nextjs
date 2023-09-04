"use client"

import { usePathname } from "next/navigation";
import { MdSearch } from "react-icons/md";

import { Button } from "../ui/button";

import header from './styles'

interface IHeaderProps {
	title?: string;
}

const { wrapper } = header()

export const Header = ({ title }: IHeaderProps) => {
	const path = usePathname()

	const getPageName = () => {
		switch(path) {
			case '/':
				return 'Home'
			default:
				return 'Home'
		}
	}

	return (
		<nav className={wrapper()}>
			<h1>{title || getPageName()}</h1>
			<Button variant="link">
				<MdSearch className="w-4 h-4" />
			</Button>
		</nav>
	)
}