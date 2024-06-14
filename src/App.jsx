import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

import Landing from './components/Landing'

function App() {

  return (
    <>
        <div className=' flex justify-center items-center h-dvh w-full'>
            <Landing />
        </div>
        <div id='hero' className=' flex justify-center items-center h-dvh w-full '>
            <Hero/>
        </div>
        

    </>
  )
}

export default App
