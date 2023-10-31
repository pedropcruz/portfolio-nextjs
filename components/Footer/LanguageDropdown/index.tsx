import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { BiWorld } from "react-icons/bi"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import dropdown from "./styles"

const { dropdownMenuTrigger, dropdownMenuItem, link } = dropdown()

export const LanguageDropdown = () => {
  const locale = useLocale()
  const t = useTranslations("footer")

  const languages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "pt",
      label: "Portuguese",
    },
  ]

  const getLabelFromLocale = (locale: string) => languages.find((lang) => lang.value === locale)?.label

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={dropdownMenuTrigger()}>
        <BiWorld />
        {t(`languages.${getLabelFromLocale(locale)}`)}
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={32} align="end" alignOffset={-64}>
        {languages.map(({ value, label }) => (
          <DropdownMenuItem
            key={value}
            className={`${dropdownMenuItem()} ${
              value === locale ? "bg-primary-100 text-black dark:bg-white dark:bg-opacity-25 dark:text-white" : ""
            }`}
          >
            <Link className={link()} key={value} href={value}>
              {t(`languages.${label}WithEmoji`)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
