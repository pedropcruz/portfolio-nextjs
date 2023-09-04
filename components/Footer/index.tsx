"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";

import { LanguageDropdown } from "@/components/Footer/LanguageDropdown";

import footer from "./styles"
import { ColorModeSwitch } from "./ColorModeSwitch";

const {wrapper, footerLink, itemsList} = footer()

export const Footer = () => {

	const t = useTranslations('footer.links')

	return (
		<nav className={wrapper()}>
			<ul className={itemsList()}>
				<LanguageDropdown/>
				<Link className={footerLink()} href="/privacy">{t('privacy')}</Link>
				<Link className={footerLink()} href="/license">{t('license')}</Link>
				<Link className={footerLink()} href="/api">API</Link>
			</ul>
			<ColorModeSwitch />
		</nav>		
	)
}