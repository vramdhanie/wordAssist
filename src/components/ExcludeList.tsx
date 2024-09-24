import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'

export const ExcludeList = () => {
    const { excludedKeys, setExcludedKeys, filter } = useKeyStore()
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
        <div ref={drop} className="w-full h-24 bg-slate-200 text-xl p-2">
            <div className="inset-0 bg-slate-200 opacity-50">Exclude these letters</div>
            {excludedKeys.join(', ')}
        </div>
    )
}
