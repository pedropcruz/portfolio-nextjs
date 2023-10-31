"use client"

import { create } from "zustand"

type Store = {
  authUser: IUser | null
  requestLoading: boolean
  setAuthUser: (user: IUser | null) => void
  setRequestLoading: (loading: boolean) => void
  reset: () => void
}

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (loading) => set((state) => ({ ...state, requestLoading: loading })),
  reset: () => set({ authUser: null, requestLoading: false }),
}))

export default useStore
