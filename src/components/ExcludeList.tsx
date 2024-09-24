import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'

export const ExcludeList = () => {
    const { excludedKeys, setExcludedKeys, filter } = useKeyStore()
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
    return (
        <div ref={drop} className="w-full h-24 bg-slate-200 text-xl p-2 touch-manipulation">
            <div className="inset-0 bg-slate-200 opacity-50">Exclude these letters</div>
            {excludedKeys.join(', ')}
            {isOver && <div className="absolute inset-0 bg-slate-300 opacity-50"></div>}
        </div>
    )
}
