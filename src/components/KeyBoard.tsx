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
        <div className="w-full max-w-3xl my-4 mx-auto">
            {keyRows.map((row, rowIndex) => (
                <div 
                    key={rowIndex} 
                    className="flex flex-row mb-2 gap-1 justify-center"
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
