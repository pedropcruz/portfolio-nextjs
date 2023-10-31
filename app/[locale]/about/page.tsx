"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

import secondLayout from "@/app/[locale]/otherStyles"

const { headerIntro, strongIntro, wrapper } = secondLayout()

export default function Index() {
  const t = useTranslations("home")

  return (
    <section className={wrapper()}>
      <div className="absolute bottom-0 right-0 h-full w-full">
        <Image fill={true} quality={100} style={{ objectFit: "contain" }} alt="myself" src="/me_withoutbg.png" />
      </div>
    </section>
  )
}
