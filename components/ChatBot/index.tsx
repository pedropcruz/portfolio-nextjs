import { Dispatch, SetStateAction, useState } from "react"
import { MdClose } from "react-icons/md"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"
import chatbot from "./styles"

const {
  card,
  cardHeader,
  closeBtn,
  closeBtnIcon,
  cardTitle,
  cardContent,
  dateTimeLabel,
} = chatbot()

interface IChatBotProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  dateTime: string
}

export const ChatBot = ({ setOpen, dateTime }: IChatBotProps) => {
  return (
    <Card className={card()}>
      <CardHeader className={cardHeader()}>
        <Avatar>
          <AvatarImage src="/me.png" alt="chatbotimg" />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className={cardTitle()}>Pedro Cruz</CardTitle>
        </div>
        <Button
          variant="outline"
          className={closeBtn()}
          onClick={() => setOpen(false)}
        >
          <MdClose className={closeBtnIcon()} />
        </Button>
      </CardHeader>
      <CardContent className={cardContent()}>
        <span className={dateTimeLabel()}>{dateTime}</span>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
