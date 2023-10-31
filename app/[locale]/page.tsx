"use client"

import { useTranslations } from "next-intl"

import homePageLayout from "./styles"

const { headerIntro, strongIntro, wrapper } = homePageLayout()

export default function Index() {
  const t = useTranslations("home")

  return (
    <section className={wrapper()}>
      <h2 className={headerIntro()}>
        {t.rich("intro.title", {
          strong: (chunks) => <strong className={strongIntro()}>{chunks}</strong>,
        })}
      </h2>
      <h5 className={headerIntro()}>{t("intro.description")}</h5>
    </section>
  )
}
