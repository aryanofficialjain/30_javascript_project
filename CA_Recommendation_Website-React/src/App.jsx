import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Join from './components/Join'
import Platform from './components/Platform'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="gradient bg-gradient-to-tl from-pink-200 via-gray-200 to-blue-200 opacity-80 filter blur-3xl absolute top-32 left-0 w-full h-[80vh]"></div>
    <Nav/>    
    <Hero/>
    <Join/>
    <Platform/>
    <Footer/>
    </>
  )
}

export default App
