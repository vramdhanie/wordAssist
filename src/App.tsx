import React from 'react'
import { styled } from './config/stitches.config'
import { Header, Footer, Main } from './components'

const Page = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
})

const MainContent = styled('main', {
    flex: '1 1 auto',
})

function App() {
    return (
        <Page>
            <Header>Word Assist</Header>
            <MainContent>
                <Main />
            </MainContent>
            <Footer> 
                <div className="flex justify-center space-x-4 mb-2">
                    <a href="https://github.com/vramdhanie" className="hover:text-slate-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/vramdhanie" className="hover:text-slate-800 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com/in/vramdhanie" className="hover:text-slate-800 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                &copy; 2024 Vincent Ramdhanie
            </Footer>
        </Page>
    )
}

export default App
