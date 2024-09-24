import { create } from 'zustand'
import { KeyChar } from '../types/keys'
import { words } from '../data/words'

interface KeyState {
    keys: Record<string, KeyChar>
    includedKeys: string[]
    excludedKeys: string[]
    letters: string[]
    words: string[]
    filteredWords: string[]
    filter: () => void
    addLetter: (letter: string, idx: number) => void
    removeLetter: (letter: string, index: number) => void
    setIncludedKeys: (keys: string[]) => void
    setExcludedKeys: (keys: string[]) => void
}

const useKeyStore = create<KeyState>((set) => ({
    keys: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ].reduce<Record<string, KeyChar>>((acc, cur) => {
        acc[cur] = {
            character: cur,
            mode: 'Unused',
        }
        return acc
    }, {}),
    includedKeys: [],
    excludedKeys: [],
    setIncludedKeys: (keys: string[]) =>
        set((state) => {
            for (const key of keys) {
                state.keys[key].mode =
                    state.keys[key].mode !== 'Include' && state.keys[key].mode !== 'Positioned'
                        ? 'Include'
                        : 'Unused'
            }
            return { includedKeys: [...new Set([...state.includedKeys, ...keys])] }
        }),
    setExcludedKeys: (keys: string[]) =>
        set((state) => {
            for (const key of keys) {
                state.keys[key].mode = 'Exclude'
            }
            return { excludedKeys: [...new Set([...state.excludedKeys, ...keys])] }
        }),
    letters: ['', '', '', '', ''],
    words: words,
    filteredWords: words,
    filter: () => {
        set((state) => {
            state.filteredWords = state.words.filter((word) => {
                const upWord = word.toUpperCase()
                for (const letter of state.excludedKeys) {
                    if (upWord.includes(letter)) {
                        return false
                    }
                }
                return true
            })

            if (state.includedKeys.length > 0) {
                state.filteredWords = state.filteredWords.filter((word) => {
                    const upWord = word.toUpperCase()
                    return state.includedKeys.every((letter) => {
                        if (upWord.includes(letter)) {
                            return true
                        }
                        return false
                    })
                })
            }
            if (state.letters.filter((letter) => letter !== '').length > 0) {
                state.filteredWords = state.filteredWords.filter((word) => {
                    const upWord = word.toUpperCase()
                    return state.letters.every((letter, index) => {
                        if (letter === '') {
                            return true
                        }
                        return upWord[index] === letter
                    })
                })
            }
            return { filteredWords: [...state.filteredWords] }
        })
    },
    addLetter: (letter: string, idx: number) =>
        set((state) => {
            if (state.letters[idx] !== '') {
                state.keys[state.letters[idx]].mode = 'Unused'
            }
            state.keys[letter].mode = 'Positioned'
            state.letters[idx] = letter
            state.includedKeys = [...new Set([...state.includedKeys, letter])]
            state.filter()
            return { letters: [...state.letters] }
        }),
    removeLetter: (letter: string, index: number) =>
        set((state) => {
            state.keys[letter].mode = 'Unused'
            state.letters[index] = ''
            return { letters: [...state.letters] }
        }),
}))

export { useKeyStore }
