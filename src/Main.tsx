import { styled } from './config/stitches.config'
import { words } from './data/words'
import {useState, useEffect} from 'react'

const Wrapper = styled('div', {
    flex: '1',
    width: '100%'
})

const Form = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '4px'
})

const Words = styled('div', {
    padding: '4px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    '@bp1': {
        gridTemplateColumns: 'repeat(6, 1fr)',
    },
    '@bp2' : {
        gridTemplateColumns: 'repeat(8, 1fr)',
    },
    '@bp3' : {
        gridTemplateColumns: 'repeat(12, 1fr)',
    }

})

const Word = styled('div', {

})

const Box = styled('div', {})
const Text = styled('div', {
})

const Label = styled('div', {
    fontSize: '12px',
    fontWeight: '500',
})

const Information = styled('div', {
    padding: '0.75rem 1.25rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#004085',
    backgroundColor: '#cce5ff',
    borderColor: '#b8daff',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: '400'
})

const Input = styled('input', {})

export default function () {
    const [lettersToInclude, setLetterstoInclude] = useState<string>('')
    const [lettersToExclude, setLetterstoExclude] = useState<string>('')
    const [wordsToDisplay, setWordsToDisplay] = useState<string[]>(words)
    const [showing, setShowing] = useState('')
    const [hiding, setHiding] = useState('')

    useEffect(() => {
        if(lettersToInclude.trim() === '') {
            setShowing('')
            return
        }
        const letters = new Set<string>(lettersToInclude.trim().toLowerCase().split(''))
        setShowing([...letters].join(''))
    }, [lettersToInclude])


    useEffect(() => {
        if(lettersToExclude.trim() === '') {
            setHiding('')
            return
        }
        const letters = new Set<string>(lettersToExclude.trim().toLowerCase().split(''))
        setHiding([...letters].join(''))
    }, [lettersToExclude])

    useEffect(() => {
        if(showing.length === 0 && hiding.length === 0) {
            setWordsToDisplay(words)
            return
        }
        const show = showing.split('')
        const hide = hiding.split('')
        setWordsToDisplay(words.filter(word => {
            const w = word.split('')
            return show.every(c => w.includes(c)) && hide.every(c => !w.includes(c))
        }))
    }, [showing, hiding])

    return <Wrapper>
        <Form>
            <Box>
                <Label>Letters to Include</Label>
                <Input onChange={e => setLetterstoInclude(e.target.value)} value={lettersToInclude}/>
            </Box>
            <Box>
                <Label>Letters to Exclude</Label>
                <Input onChange={e=>setLetterstoExclude(e.target.value)} value={lettersToExclude}/>
            </Box>
        </Form>
        <Information>
            <Box>{showing || hiding ? <Box>{showing && <Text>Showing words containing the letters: {showing}</Text>}
                    {hiding && <Text>Hiding words containing the letters: {hiding}</Text>}
            </Box> : "No Filter"}</Box>
            <Box>{wordsToDisplay.length} words</Box>
        </Information>
        <Words>
            {wordsToDisplay.map(word => <Word key={word}>{word}</Word>)}
        </Words>
    </Wrapper>
}