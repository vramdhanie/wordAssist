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
                // Base key styles - responsive sizing
                'w-8 h-9 sm:w-10 sm:h-11 md:w-12 md:h-12',
                'min-w-0 sm:min-w-[2.5rem] md:min-w-[3rem]',
                'flex items-center justify-center',
                'font-medium rounded-md border border-gray-300',
                'transition-all duration-100',
                
                // 3D effect with shadows
                isDragging ? 'shadow-lg' : 'shadow-md',
                
                // Color based on mode
                bgColor,
                
                // Hover and active states - improved for touch
                'hover:brightness-110',
                'active:shadow-inner active:translate-y-0.5',
                
                // Other utilities
                'touch-manipulation',
                'text-sm sm:text-base md:text-xl'
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
