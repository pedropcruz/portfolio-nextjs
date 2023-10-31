import { useEffect } from "react"
import { getUser } from "@/services/auth"
import useStore from "@/store"

export default function useSessions() {
  const store = useStore()

  const fetchUser = async () => {
    try {
      const user = await getUser()
      store.setAuthUser(user)
    } catch (error) {
      store.reset()
    }
  }

  useEffect(() => {
    const loggedIn = document.cookie.includes("logged-in=true")
    if (loggedIn) {
      fetchUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return store.authUser
}
