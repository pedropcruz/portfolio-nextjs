"use client"

import { usePathname, useRouter } from "next/navigation"
import useSessions from "@/hook/useSessions"
import { logoutUser } from "@/services/auth"
import useStore from "@/store"
import { useLocale, useTranslations } from "next-intl"
import { MdLogout, MdSearch } from "react-icons/md"

import { Button } from "@/components/ui/button"

import header from "./styles"

interface IHeaderProps {
  title?: string
}

const { wrapper } = header()

export const Header = ({ title }: IHeaderProps) => {
  const store = useStore()
  const user = useSessions()
  const path = usePathname()
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()

  const getPageName = () => {
    switch (path) {
      case `/${locale}`:
        return null
      case `/${locale}/about`:
        return t("about.path")
      default:
        return ""
    }
  }
  const handleLogout = async () => {
    store.setRequestLoading(true)
    try {
      await logoutUser()
    } catch (error) {
    } finally {
      store.reset()
      router.push("/")
    }
  }

  return (
    <nav className={wrapper()}>
      <h1>{title || getPageName()}</h1>
      <div>
        <Button variant="link">
          <MdSearch />
        </Button>
        {user && (
          <Button variant="default" onClick={handleLogout} className="ml-4">
            <MdLogout className="mr-2" /> Logout
          </Button>
        )}
      </div>
    </nav>
  )
}
