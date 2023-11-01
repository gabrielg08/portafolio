import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Container from './components/Container'
import Example from './components/Tech'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen bg-[#11071F]'>
      <Nav />
      <Container />
      <Example />
      <Footer />
    </main>
  )
}

export default App
