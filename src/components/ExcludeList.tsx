import { useCallback } from 'react'
import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'
import { KeyTile } from './KeyTile'

export const ExcludeList = () => {
    const { excludedKeys, setExcludedKeys, filter, clearExcludedKeys, keys } = useKeyStore()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            setExcludedKeys([...excludedKeys, item.label])
            filter()
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const handleRemove = useCallback(() => {
        if (excludedKeys.length > 0) {
            // Update all excluded keys to Unused mode
            for (const key of excludedKeys) {
                if (keys[key].mode === 'Exclude') {
                    keys[key].mode = 'Unused'
                }
            }
            clearExcludedKeys()
            filter()
        }
    }, [excludedKeys, clearExcludedKeys, filter, keys])

    const removeKey = useCallback((letter: string) => {
        // Set the mode of the removed key back to Unused if it was Exclude
        if (keys[letter] && keys[letter].mode === 'Exclude') {
            keys[letter].mode = 'Unused'
        }
        
        // Clear the list and add back all keys except the one to remove
        clearExcludedKeys()
        
        const newExcludedKeys = excludedKeys.filter(key => key !== letter)
        if (newExcludedKeys.length > 0) {
            setExcludedKeys(newExcludedKeys)
        }
        
        // Apply the filter to update filtered words
        filter()
    }, [excludedKeys, setExcludedKeys, clearExcludedKeys, filter, keys])

    return (
        <div
            ref={drop}
            className="w-full h-24 bg-white border border-gray-200 rounded-lg shadow-sm text-xl p-4 touch-manipulation relative group overflow-auto"
        >
            <h3 className="text-sm font-medium text-gray-600 mb-2">Exclude these letters</h3>
            <div className="flex flex-wrap">
                {excludedKeys.map((key, index) => (
                    <KeyTile key={index} letter={key} onRemove={removeKey} />
                ))}
            </div>
            {isOver && <div className="absolute inset-0 bg-gray-100 opacity-30 rounded-lg"></div>}
            <button
                className="hidden text-xs text-gray-500 absolute top-2 right-2 group-hover:block group-active:block hover:text-gray-700"
                onClick={handleRemove}
            >
                Clear all
            </button>
        </div>
    )
}
