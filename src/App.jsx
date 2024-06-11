import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div className='h-dvh w-full bg-img2 bg-cover bg-no-repeat bg-center flex justify-center items-center bg-fixed relative text-white '>
        <Header/>
         
      </div>
      <div className='h-dvh w-full flex justify-center items-center dark:bg-black/80 dark:text-white'>
       <i class="fa-solid fa-r ani "></i>
        </div> 
   
      <div className='h-96 w-full bg-img1 bg-cover bg-no-repeat bg-center bg-fixed'>

      </div>
      <div id='body' className='h-dvh w-full bg-white'></div>
    </>
  )
}

export default App
