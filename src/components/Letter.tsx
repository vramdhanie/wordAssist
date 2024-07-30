import { useDrop } from 'react-dnd'
import { useKeyStore } from '../store/keyStore'
interface Props {
    children: React.ReactNode
    index: number
}

export const Letter = ({ children, index }: Props) => {
    const { addLetter } = useKeyStore()

    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: (item: { label: string }) => {
            addLetter(item.label, index)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })
    return (
        <div
            ref={drop}
            className="relative h-full w-full bg-white flex justify-center items-center text-slate-600 text-7xl"
        >
            {children}
            {isOver && <div className="absolute inset-0 bg-slate-200 opacity-50"></div>}
        </div>
    )
}
