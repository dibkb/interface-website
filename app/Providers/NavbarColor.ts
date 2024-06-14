import { create } from 'zustand'

interface ModeStore {
  mode: string
  setMode: (mode : string) => void
}

export const useMode = create<ModeStore>()((set) => ({
  mode: "light",
  setMode : (e : string) => set((state) => ({mode : e})),
}))