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
                return 'bg-green-500 text-white'
            case 'Exclude':
                return 'bg-red-500 text-white'
            case 'Positioned':
                return 'bg-blue-500 text-white'
            default:
                return 'bg-gray-100'
        }
    }, [mode])

    return (
        <button
            type="button"
            className={twMerge(
                // Base key styles
                'w-12 h-12 min-w-[3rem] flex items-center justify-center',
                'font-medium rounded-md border border-gray-300',
                'transition-all duration-100',
                
                // 3D effect with shadows
                isDragging ? 'shadow-lg' : 'shadow-md',
                
                // Color based on mode
                bgColor,
                
                // Hover and active states
                'hover:brightness-110',
                'active:shadow-inner active:translate-y-0.5',
                
                // Other utilities
                'touch-manipulation',
                'text-xl'
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
