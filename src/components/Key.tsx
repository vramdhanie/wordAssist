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
    return (
        <button type="button" className="" {...props}>
            {label}
        </button>
    )
}
