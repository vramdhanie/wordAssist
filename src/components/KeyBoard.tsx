import { useKeyStore } from '../store/keyStore'
import { Key } from './Key'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const KeyBoard = () => {
    const { keys } = useKeyStore()
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-10 w-full max-w-96 my-0 mx-auto">
                {Object.values(keys).map((key, index) => {
                    return <Key key={index} label={key.character} mode={key.mode} />
                })}
            </div>
        </DndProvider>
    )
}
