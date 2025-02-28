import React from 'react'

interface KeyTileProps {
    letter: string
    onRemove: (letter: string) => void
}

export const KeyTile = ({ letter, onRemove }: KeyTileProps) => {
    return (
        <div className="inline-flex items-center justify-center m-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm relative group hover:shadow transition-all">
            <span className="text-base font-medium">{letter}</span>
            <button 
                className="hidden absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs group-hover:flex hover:bg-red-600"
                onClick={() => onRemove(letter)}
            >
                ×
            </button>
        </div>
    )
} 