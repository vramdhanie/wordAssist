import { useCallback } from 'react'
import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'

export const ExcludeList = () => {
    const { excludedKeys, setExcludedKeys, filter, clearExcludedKeys } = useKeyStore()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            setExcludedKeys([...excludedKeys, item.label])
            filter()
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const handleRemove = useCallback(() => {
        if (excludedKeys.length > 0) {
            clearExcludedKeys()
            filter()
        }
    }, [excludedKeys, clearExcludedKeys, filter])

    return (
        <div
            ref={drop}
            className="w-full h-24 bg-slate-200 text-xl p-2 touch-manipulation relative group"
        >
            <div className="inset-0 bg-slate-200 opacity-50">Exclude these letters</div>
            {excludedKeys.join(', ')}
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
