import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Image from "next/image"

import { MdClose } from "react-icons/md"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"

import messages from "@/lib/messages"

import chatbot from "./styles"

const {
  card,
  cardHeader,
  closeBtn,
  closeBtnIcon,
  cardTitle,
  cardContent,
  botContentMessage,
  botName,
  botImageContainer,
  botImage,
  botMessage,
  dateTimeLabel,
  buttonGroup,
} = chatbot()

interface IChatBotProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean;
  dateTime: string
}

export const ChatBot = ({ setOpen, dateTime }: IChatBotProps) => {
  const delayBetweenMessages = 1000
  const [isLoading, setIsLoading] = useState(false)
  const [currentBotResponseIndex, setCurrentBotResponseIndex] = useState(0)
  
  const currentMessage = messages[currentBotResponseIndex]
  const hasOptions = currentMessage.options?.length
  const hasNextMessage = currentMessage.trigger

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      if ( !hasOptions && hasNextMessage !== undefined) {
        setCurrentBotResponseIndex(currentBotResponseIndex + 1)
      } 
        setIsLoading(false)
      
    }, delayBetweenMessages)
    
    return () => {
      clearTimeout(timeout)
    }
  }, [currentBotResponseIndex, hasOptions, hasNextMessage]);


  const handleButtonClick = (trigger: string) => {
    if (!isLoading) {
      const nextMessageIndex = messages.findIndex((message) => message.id === trigger)

      if (nextMessageIndex !== -1) {
        setIsLoading(true)
        setCurrentBotResponseIndex(nextMessageIndex)
        setIsLoading(false)
      }
    }
  }

  const renderMessages = () => (
    messages.map(({ message, options }, index) => {
     if (index > currentBotResponseIndex) return null;
    
    const isCurrentMessage = index <= currentBotResponseIndex;
    const shouldShowMessage = isCurrentMessage || (options && options.length > 0);

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
            <p>Pedro Cruz Assistant <span className={dateTimeLabel()}>{dateTime}</span></p>
          </div>
          { shouldShowMessage && ( 
            isLoading ? (
              <div className={botMessage()}>
                <Image src="/loading.gif" width={36} height={8} alt="loading message" />
              </div>
            ) : (
              <>
              <div className={botMessage()}>{message}</div>
              { options && (
                <div  className={buttonGroup()}>
                  {options?.map(({ value, label, trigger }) => (
                    <Button  key={value} variant="outline" onClick={() => handleButtonClick(trigger)}>
                      {label}
                    </Button>
                  ))}
                </div>
              )}
              </>
            ))}
        </div>
      )
    })
  )

 
  return (
      <Card className={card()}>
        <CardHeader className={cardHeader()}>
          <Avatar>
            <AvatarImage src="/me.png" alt="chatbotimg" />
            <AvatarFallback>PC</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className={cardTitle()}>Pedro Cruz Assistant</CardTitle>
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
          {renderMessages()}
        </CardContent>
      </Card>
  )
}
