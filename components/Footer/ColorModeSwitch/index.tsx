"use client"

import { useTheme } from "next-themes"
import { BiMoon, BiSun } from "react-icons/bi"

import colorModeSwitch from "./styles"

const { switcher, input, toggleContainer, icon, iconDark, iconLight } = colorModeSwitch()

export const ColorModeSwitch = () => {
  const { setTheme, theme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  const toggleTheme = () => (theme == "dark" ? setTheme("light") : setTheme("dark"))

  return (
    <div className={switcher()} onClick={toggleTheme}>
      <input className={input()} type="checkbox" onChange={toggleTheme} checked={currentTheme === "dark"} />
      <div className={toggleContainer()}>
        <span className={iconLight()}>
          <BiSun className={icon()} />
        </span>
        <span className={iconDark()}>
          <BiMoon className={icon()} />
        </span>
      </div>
    </div>
  )
}
