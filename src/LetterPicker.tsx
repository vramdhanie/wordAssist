import { styled } from './config/stitches.config'


const Container = styled('div', {
    position: 'absolute',
    border: '1px solid rgba(0,0,0,0.1)',
    boxShadow: '0 0 2px 3px rgba(0,0,0,0.3)',
    width: '200px',
    height: '200px',
    background: 'white',
    borderRadius: '6px'
})

const Selected = styled('div', {
    display: 'flex',
    flexDirection: 'row'
})
const ToPick = styled('div', {})
const Letter = styled('div', {
    padding: '1px',
    color: 'DarkMagenta'
})
export default function LetterPicker({ letters }: {letters:string}) {

    return <Container>
        <Selected>
            {letters.split('').map(l => <Letter key={l}>{l}</Letter>)}
        </Selected>
    </Container>
}