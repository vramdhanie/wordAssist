import { create } from 'zustand'
import { KeyChar } from '../types/keys'

interface KeyState {
    keys: Record<string, KeyChar>
    includedKeys: string[]
    excludedKeys: string[]
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
}))

export { useKeyStore }
