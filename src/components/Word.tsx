import { Letter } from './Letter'
import { useKeyStore } from '../store/keyStore'

export const Word = () => {
    const { letters } = useKeyStore()
    return (
        <div className="flex justify-center w-full mt-3 mb-5 sm:mt-4 sm:mb-6">
            <div className="flex gap-1 sm:gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md px-2">
                {letters.map((letter, index) => {
                    return (
                        <div key={index} className="h-14 sm:h-16 md:h-20 flex-1">
                            <Letter index={index}>
                                {letter}
                            </Letter>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
