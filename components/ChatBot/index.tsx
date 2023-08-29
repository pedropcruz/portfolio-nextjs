import { Dispatch, SetStateAction, useState } from "react"
import { MdClose } from "react-icons/md"

import messages from "@/lib/messages"
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
  botContentMessage,
  botName,
  botImageContainer,
  botImage,
  botMessage,
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
        {messages.map(({ message, trigger, options, end }, index) => {
          return (
            <div className={botContentMessage()} key={index}>
              <div className={botName()}>
                <Avatar className={botImageContainer()}>
                  <AvatarImage
                    className={botImage()}
                    src="/me.png"
                    alt="chatbotimg"
                  />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <p>Pedro Cruz Assistant</p>
              </div>
              <div className={botMessage()}>{message}</div>
            </div>
          )
        })}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
