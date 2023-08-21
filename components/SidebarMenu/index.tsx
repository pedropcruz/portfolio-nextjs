import Image from "next/image"
import Link from "next/link"
import {
  MdAccountCircle,
  MdArticle,
  MdAssignment,
  MdHome,
  MdPhoneInTalk,
  MdWork,
} from "react-icons/md"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import sidebar from "./styles"

const { base, wrapper, logo, logoImg, list, itemList, itemLabel } = sidebar()

export const SideBarMenu = () => {
  const pageLinks = [
    {
      label: "Home",
      href: "/",
      icon: <MdHome size={16} />,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <MdWork size={16} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <MdAccountCircle size={16} />,
    },
    {
      label: "CV",
      href: "/cv",
      icon: <MdAssignment size={16} />,
    },
    {
      label: "Blog",
      href: "/blog",
      icon: <MdArticle size={16} />,
    },
    {
      label: "Contacts",
      href: "/contacts",
      icon: <MdPhoneInTalk size={16} />,
    },
  ]

  return (
    <aside className={base()}>
      <div className={wrapper()}>
        <Link className={logo()} href="#">
          <Image
            className={logoImg()}
            src="/logo_dark.svg"
            width="135"
            height="30"
            alt="my brand"
          />
        </Link>
        <label></label>
        <ul className={list()}>
          {pageLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <Link className={itemList()} href={href}>
                {icon}
                <span className={itemLabel()}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className={itemList()}>
              <Image src="/me.png" width="22" height="22" alt="chatbot" />
              <span>Pedro Cruz Assistant</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  )
}
