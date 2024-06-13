import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Logo from './components/Logo'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className=' flex justify-center items-center h-dvh w-full'>
            <Landing/>
        </div>
        <div id='hero' className=' flex justify-center items-center h-dvh w-full '>

            
            <Hero/>
        </div>


    </>
  )
}

export default App
