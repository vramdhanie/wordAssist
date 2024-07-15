import React from 'react'
import { styled } from './config/stitches.config'
import Main from './Top'

const Page = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
})

const Header = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
})

const Footer = styled('div', {
    boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    fontSize: '9px',
    textAlign: 'center',
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
