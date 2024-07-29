import { useDrop } from 'react-dnd'

interface Props {
    children: React.ReactNode
}

export const Letter = ({ children }: Props) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'key',
        drop: () => {
            console.log('dropped', children)
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
