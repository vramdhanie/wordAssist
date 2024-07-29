import { create } from 'zustand'

interface WordState {
    letters: string[]
}

const useWordStore = create<WordState>((set) => ({
    letters: ['A', 'B', '', '', ''],
    setLetters: (letters: string[]) =>
        set(() => {
            return { letters: letters }
        }),
    addLetter: (letter: string) =>
        set((state) => {
            return { letters: [...state.letters, letter] }
        }),
    removeLetter: (letter: string) =>
        set((state) => {
            return { letters: state.letters.filter((l) => l !== letter) }
        }),
    clearLetters: () =>
        set(() => {
            return { letters: [] }
        }),
    clearAll: () =>
        set(() => {
            return { letters: [] }
        }),
}))

export { useWordStore }
