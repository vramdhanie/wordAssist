import { useDrag, DragSourceMonitor } from 'react-dnd'
import { twMerge } from 'tailwind-merge'
export interface KeyProps {
    /**
     * Key character
     */
    label: string
    /**
     * Can be Unused, Include, Positioned, or Exclude
     */
    mode: string
    /**
     * Optional click handler
     */
    onClick?: () => void
}

/**
 * Represents a single keyboard key.
 */
export const Key = ({ label, mode = 'Unused', ...props }: KeyProps) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'key',
        item: { label },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <button
            type="button"
            className={isDragging ? 'bg-red-500' : 'bg-white'}
            {...props}
            ref={drag}
        >
            {label}
        </button>
    )
}
