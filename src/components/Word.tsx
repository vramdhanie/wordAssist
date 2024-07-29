import { Letter } from './Letter'
import { useWordStore } from '../store/wordStore'

export const Word = () => {
    const { letters } = useWordStore()
    return (
        <div className="flex w-full border border-solid h-24 gap-1 bg-slate-50">
            {letters.map((letter, index) => {
                return <Letter key={index}>{letter}</Letter>
            })}
        </div>
    )
}
