import { useKeyStore } from '../store/keyStore'

export const WordList = () => {
    const { filteredWords } = useKeyStore()
    return (
        <div className="w-full h-full">
            <div className="text-xl">{filteredWords.length} words found</div>
            <div className="grid grid-cols-3 md:grid-cols-8 sm:grid-cols-4">
                {filteredWords.map((word) => {
                    return <div key={word}>{word}</div>
                })}
            </div>
        </div>
    )
}
