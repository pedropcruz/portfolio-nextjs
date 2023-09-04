"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion"
import dayjs from "dayjs"

import "dayjs/locale/pt"

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
  const t = useTranslations('sidebar')
  const [dateTimeNow, setDateTimeNow] = useState(dayjs().format('h:mm A'))
  const [isOpen, setIsOpen] = useState(false)

  const pageLinks = [
    {
      label: t('links.home'),
      href: "/",
      icon: <MdHome size={16} />,
    },
    {
      label: t('links.portfolio'),
      href: "/portfolio",
      icon: <MdWork size={16} />,
    },
    {
      label: t('links.about'),
      href: "/about",
      icon: <MdAccountCircle size={16} />,
    },
    {
      label: t('links.CV'),
      href: "/cv",
      icon: <MdAssignment size={16} />,
    },
    {
      label: t('links.blog'),
      href: "/blog",
      icon: <MdArticle size={16} />,
    },
    {
      label: t('links.contacts'),
      href: "/contacts",
      icon: <MdPhoneInTalk size={16} />,
    },
  ]

  const openChatbot = () => {
    setDateTimeNow(dayjs().format('h:mm A'))
    setIsOpen(true)
  }

  const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring"
    },
    display: "block"
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3
    },
    transitionEnd: {
      display: "none"
    }
  }
};

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
          <Popover defaultOpen={false} onOpenChange={setIsOpen} modal>
            <PopoverTrigger asChild>
              <Button className={itemList()} onClick={openChatbot}>
                <Avatar className={chatbotImg()}>
                  <AvatarImage src="/me.png" alt="chatbotimg" />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <span>{t('chatbot.name')}</span>
              </Button>
            </PopoverTrigger>
              <PopoverContent
                side="right"
                sideOffset={24}
                className={popoverContent()}
                collisionPadding={{ bottom: 8 }}
                sticky="always"
                asChild
                forceMount
                onFocusOutside={() => setIsOpen(false)}
                onInteractOutside={() => setIsOpen(false)}
              >
                <motion.div variants={slideVerticalAnimation} initial="close" animate={ isOpen ? "open" : "close"}>
                  <ChatBot dateTime={dateTimeNow} setOpen={setIsOpen} isOpen={isOpen} />
                </motion.div>
              </PopoverContent> 
          </Popover>
      </div>
    </aside>
  )
}
