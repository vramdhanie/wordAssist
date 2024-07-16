export interface KeyProps {
    /**
     * Colour of the text
     */
    colour: string
    /**
     * What background color to use
     */
    backgroundColor?: string
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
export const Key = ({
    colour = '#004085',
    backgroundColor = '#cce5ff',
    label,
    mode = 'Unused',
    ...props
}: KeyProps) => {
    return (
        <button
            type="button"
            className=""
            {...props}
        >
            {label}
        </button>
    )
}
