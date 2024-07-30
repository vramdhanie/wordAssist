import { create } from 'zustand'

interface WordState {
    letters: string[]
    addLetter: (letter: string, idx: number) => void
}

const useWordStore = create<WordState>((set) => ({
    letters: ['', '', '', '', ''],
    setLetters: (letters: string[]) =>
        set(() => {
            return { letters: letters }
        }),
    addLetter: (letter: string, idx: number) =>
        set((state) => {
            state.letters[idx] = letter
            return { letters: [...state.letters] }
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
