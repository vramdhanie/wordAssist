import React from 'react'
import { styled } from './config/stitches.config'
import { Header, Footer, Main } from './components'

const Page = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
})

function App() {
    return (
        <Page>
            <Header>Word Assist</Header>
            <Main />
            <Footer>&copy; 2024 Vincent Ramdhanie</Footer>
        </Page>
    )
}

export default App
