"use client"

import Image from "next/image"
import Link from "next/link"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"
import { motion } from "framer-motion"

import "dayjs/locale/pt"

import { useState } from "react"
import {
  MdAccountCircle,
  MdArticle,
  MdAssignment,
  MdHome,
  MdPhoneInTalk,
  MdWork,
} from "react-icons/md"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ChatBot } from "../ChatBot"
import { Button } from "../ui/button"
import sidebar from "./styles"

dayjs.extend(calendar)

const {
  base,
  wrapper,
  logo,
  logoImg,
  list,
  itemList,
  itemLabel,
  chatbotImg,
  popoverContent,
} = sidebar()

export const SideBarMenu = () => {
  const [dateTimeNow, setDateTimeNow] = useState(dayjs().calendar(new Date()))
  const [isOpen, setIsOpen] = useState(false)

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

  const openChatbot = () => {
    setDateTimeNow(dayjs().calendar(new Date()))
    setIsOpen(true)
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

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
          <Popover open={isOpen}>
            <PopoverTrigger asChild>
              <Button className={itemList()} onClick={openChatbot}>
                <Avatar className={chatbotImg()}>
                  <AvatarImage src="/me.png" alt="chatbotimg" />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <span>Pedro Cruz Assistant</span>
              </Button>
            </PopoverTrigger>

            <motion.div variants={container} initial="hidden" animate="visible">
              <PopoverContent
                className={popoverContent()}
                side="right"
                sideOffset={24}
                collisionPadding={{ bottom: 8 }}
                sticky="always"
              >
                <ChatBot dateTime={dateTimeNow} setOpen={setIsOpen} />
              </PopoverContent>
            </motion.div>
          </Popover>
        </div>
      </div>
    </aside>
  )
}
