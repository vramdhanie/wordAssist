import { Letter } from './Letter'
import { useKeyStore } from '../store/keyStore'

export const Word = () => {
    const { letters } = useKeyStore()
    return (
        <div className="flex justify-center w-full h-24 mt-4 mb-6">
            <div className="flex gap-2 max-w-md w-full">
                {letters.map((letter, index) => {
                    return (
                        <Letter key={index} index={index}>
                            {letter}
                        </Letter>
                    )
                })}
            </div>
        </div>
    )
}
