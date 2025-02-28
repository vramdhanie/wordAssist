import React from 'react'

interface KeyTileProps {
    letter: string
    onRemove: (letter: string) => void
}

export const KeyTile = ({ letter, onRemove }: KeyTileProps) => {
    return (
        <div className="inline-flex items-center justify-center m-0.5 sm:m-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-200 rounded-md shadow-sm relative group hover:shadow transition-all">
            <span className="text-sm sm:text-base font-medium">{letter}</span>
            <button 
                className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 bg-red-500 text-white rounded-full w-5 h-5 sm:w-4 sm:h-4 flex items-center justify-center text-xs hover:bg-red-600"
                onClick={() => onRemove(letter)}
            >
                ×
            </button>
        </div>
    )
} 