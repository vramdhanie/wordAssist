import { useCallback } from 'react'
import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'
import { KeyTile } from './KeyTile'

export const IncludeList = () => {
    const { includedKeys, setIncludedKeys, filter, clearIncludedKeys, keys } = useKeyStore()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            setIncludedKeys([...includedKeys, item.label])
            filter()
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const handleRemove = useCallback(() => {
        if (includedKeys.length > 0) {
            // Update all included keys to Unused mode if they're not positioned
            for (const key of includedKeys) {
                if (keys[key].mode === 'Include') {
                    keys[key].mode = 'Unused'
                }
            }
            clearIncludedKeys()
            filter()
        }
    }, [includedKeys, clearIncludedKeys, filter, keys])

    const removeKey = useCallback((letter: string) => {
        // Set the mode of the removed key back to Unused if it was Include and not Positioned
        if (keys[letter] && keys[letter].mode === 'Include') {
            keys[letter].mode = 'Unused'
        }
        
        // Clear the list and add back all keys except the one to remove
        clearIncludedKeys()
        
        const newIncludedKeys = includedKeys.filter(key => key !== letter)
        if (newIncludedKeys.length > 0) {
            setIncludedKeys(newIncludedKeys)
        }
        
        // Apply the filter to update filtered words
        filter()
    }, [includedKeys, setIncludedKeys, clearIncludedKeys, filter, keys])

    return (
        <div
            ref={drop}
            className="w-full h-16 sm:h-20 md:h-24 bg-white border border-gray-200 rounded-lg shadow-sm p-2 sm:p-3 md:p-4 touch-manipulation relative group overflow-auto mb-2 sm:mb-3"
        >
            <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Include these letters</h3>
            <div className="flex flex-wrap">
                {includedKeys.map((key, index) => (
                    <KeyTile key={index} letter={key} onRemove={removeKey} />
                ))}
            </div>
            {isOver && <div className="absolute inset-0 bg-gray-100 opacity-30 rounded-lg"></div>}
            <button
                className="hidden text-xs text-gray-500 absolute top-1 sm:top-2 right-1 sm:right-2 group-hover:block group-active:block hover:text-gray-700"
                onClick={handleRemove}
            >
                Clear all
            </button>
        </div>
    )
}
