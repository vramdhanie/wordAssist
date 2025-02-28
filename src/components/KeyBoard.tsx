import { useKeyStore } from '../store/keyStore'
import { Key } from './Key'

export const KeyBoard = () => {
    const { keys } = useKeyStore()
    
    // Define the rows of a QWERTY keyboard
    const keyRows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ]
    
    return (
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto my-3 sm:my-4 px-1 sm:px-2">
            {keyRows.map((row, rowIndex) => (
                <div 
                    key={rowIndex} 
                    className="flex flex-row mb-1 sm:mb-2 gap-0.5 sm:gap-1 justify-center"
                >
                    {row.map((keyChar) => (
                        <div key={keyChar} className="px-0.5">
                            <Key 
                                label={keyChar} 
                                mode={keys[keyChar].mode} 
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
