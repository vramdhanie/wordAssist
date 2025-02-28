import { useDrop } from 'react-dnd'
import { useKeyStore } from '../store/keyStore'
import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    index: number
}

export const Letter = ({ children, index }: Props) => {
    const { addLetter, removeLetter, filter } = useKeyStore()

    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            addLetter(item.label, index)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const handleRemove = useCallback(() => {
        if (children) {
            removeLetter(children.toString(), index)
            filter()
        }
    }, [index, removeLetter, children, filter])

    const isEmpty = !children || children.toString() === ''

    return (
        <div
            ref={drop}
            className={twMerge(
                // Base styles for all letter boxes
                "relative flex justify-center items-center",
                "w-full h-full aspect-square rounded-md",
                "transition-all duration-100",
                "touch-manipulation",

                // Different styling based on whether the letter slot is empty or filled
                isEmpty 
                    ? "border-2 border-dashed border-gray-300 bg-gray-50"
                    : "border border-gray-300 bg-white shadow-md",

                // Hover effects
                "hover:border-blue-300",

                // Animation for drag over state
                isOver && "border-blue-500 border-solid"
            )}
        >
            <span className={twMerge(
                "text-center text-5xl font-medium",
                isEmpty ? "text-gray-300" : "text-gray-700"
            )}>
                {isEmpty ? "?" : children}
            </span>
            
            {isOver && <div className="absolute inset-0 bg-blue-100 opacity-30 rounded-md"></div>}
            
            <button
                onClick={handleRemove}
                className={twMerge(
                    'hidden absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-sm',
                    children ? 'group-hover:flex' : 'hidden'
                )}
            >
                ×
            </button>
        </div>
    )
}
