import { useMemo } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { twMerge } from 'tailwind-merge'

export interface KeyProps {
    label: string
    mode: string
    onClick?: () => void
}

/**
 * Represents a single keyboard key.
 */
export const Key = ({ label, mode = 'Unused', ...props }: KeyProps) => {
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'key',
        item: { label },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const bgColor = useMemo(() => {
        switch (mode) {
            case 'Include':
                return 'bg-green-500'
            case 'Exclude':
                return 'bg-red-500'
            case 'Positioned':
                return 'bg-blue-500'
            default:
                return 'bg-white'
        }
    }, [mode])

    return (
        <button
            type="button"
            className={twMerge(
                isDragging ? 'shadow' : 'shadow-sm',
                bgColor,
                'hover:bg-slate-100',
                'touch-manipulation',
                'text-2xl'
            )}
            {...props}
            ref={(node) => {
                drag(node)
                preview(node)
            }}
        >
            {label}
        </button>
    )
}
