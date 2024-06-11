import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div className='h-dvh w-full bg-img2 bg-cover bg-no-repeat bg-center flex justify-center  items-center bg-fixed relative text-white '>
        <Logo/>
        <Header/>
        <Hero/>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
