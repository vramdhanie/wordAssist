import { useCallback } from 'react'
import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'

export const IncludeList = () => {
    const { includedKeys, setIncludedKeys, filter, clearIncludedKeys } = useKeyStore()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            setIncludedKeys([...includedKeys, item.label])
            filter()
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const handleRemove = useCallback(() => {
        if (includedKeys.length > 0) {
            clearIncludedKeys()
            filter()
        }
    }, [includedKeys, clearIncludedKeys, filter])

    return (
        <div
            ref={drop}
            className="w-full h-24 bg-slate-200 text-xl p-2 touch-manipulation relative group"
        >
            <div className="inset-0 bg-slate-200 opacity-50">Include these letters</div>
            {includedKeys.join(', ')}
            {isOver && <div className="absolute inset-0 bg-slate-300 opacity-50"></div>}
            <button
                className="hidden text-sm absolute top-2 right-2 group-hover:block group-active:block"
                onClick={handleRemove}
            >
                X
            </button>
        </div>
    )
}
