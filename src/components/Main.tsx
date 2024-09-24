import { KeyBoard } from './KeyBoard'
import { Word } from './Word'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { WordList } from './WordList'
import { IncludeList } from './IncludeList'
import { ExcludeList } from './ExcludeList'

export function Main() {
    return (
        <div className="flex-1 w-full md:w-1/2 mx-auto my-0">
            <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
                <KeyBoard />
                <IncludeList />
                <ExcludeList />
                <Word />
            </DndProvider>
            <WordList />
        </div>
    )
}
