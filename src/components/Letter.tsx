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

    return (
        <div
            ref={drop}
            className="group relative h-full w-full bg-white flex justify-center items-center text-slate-600 text-7xl touch-manipulation"
        >
            {children}
            {isOver && <div className="absolute inset-0 bg-slate-200 opacity-50"></div>}
            <button
                onClick={handleRemove}
                className={twMerge(
                    children ? 'group-hover:block group-active:block' : '',
                    'hidden absolute text-sm top-2 right-2 touch-manipulation'
                )}
            >
                X
            </button>
        </div>
    )
}
