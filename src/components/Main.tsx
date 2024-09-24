import { styled } from '../config/stitches.config'
import { useState, useEffect, useCallback } from 'react'
import { KeyBoard } from './KeyBoard'
import { Word } from './Word'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WordList } from './WordList'
import { IncludeList } from './IncludeList'
import { ExcludeList } from './ExcludeList'

export function Main() {
    const [showing, setShowing] = useState('')
    const [hiding, setHiding] = useState('')

    const handleReset = useCallback(() => {}, [showing, hiding])

    return (
        <div className="flex-1 w-1/2 mx-auto my-0">
            <DndProvider backend={HTML5Backend}>
                <KeyBoard />
                <IncludeList />
                <ExcludeList />
                <Word />
            </DndProvider>
            <WordList />
        </div>
    )
}
