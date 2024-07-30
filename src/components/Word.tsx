import { Letter } from './Letter'
import { useKeyStore } from '../store/keyStore'

export const Word = () => {
    const { letters } = useKeyStore()
    return (
        <div className="flex w-full border border-solid h-24 gap-1 bg-slate-50">
            {letters.map((letter, index) => {
                return (
                    <Letter key={index} index={index}>
                        {letter}
                    </Letter>
                )
            })}
        </div>
    )
}
