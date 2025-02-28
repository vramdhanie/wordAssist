import { useKeyStore } from '../store/keyStore'

export const WordList = () => {
    const { filteredWords } = useKeyStore()
    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                    {filteredWords.length}
                </span>
                <span>Words Found</span>
            </h2>
            
            {filteredWords.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    {filteredWords.map((word) => (
                        <div 
                            key={word}
                            className="bg-gray-50 px-3 py-1.5 rounded text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {word.toUpperCase()}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500">
                    No words match your current filters
                </div>
            )}
        </div>
    )
}
