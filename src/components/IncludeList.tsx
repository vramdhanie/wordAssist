import { useKeyStore } from '../store/keyStore'
import { useDrop } from 'react-dnd'

export const IncludeList = () => {
    const { includedKeys, setIncludedKeys, filter } = useKeyStore()
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
    return (
        <div ref={drop} className="w-full h-24 bg-slate-200 text-xl p-2 touch-manipulation">
            <div className="inset-0 bg-slate-200 opacity-50">Include these letters</div>
            {includedKeys.join(', ')}
            {isOver && <div className="absolute inset-0 bg-slate-300 opacity-50"></div>}
        </div>
    )
}
