import { useKeyStore } from '../store/keyStore'
import { Key } from './Key'

export const KeyBoard = () => {
    const { keys } = useKeyStore()
    return (
        <div className="grid grid-cols-10 w-full max-w-3xl my-0 mx-auto">
            {Object.values(keys).map((key, index) => {
                return <Key key={index} label={key.character} mode={key.mode} />
            })}
        </div>
    )
}
