import { create } from "zustand"

type Store = {
    intro: React.RefObject<HTMLDivElement | null> | null,
    setIntro: (intro: React.RefObject<HTMLDivElement | null>) => void
}

export const useStore = create<Store>(set => ({
    intro: null,
    setIntro: (intro: React.RefObject<HTMLDivElement | null>) => {
        set(() => ({ intro }))
    }
}))