import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <div className='h-dvh w-full bg-img2 bg-cover bg-no-repeat bg-center flex justify-center items-center bg-fixed relative'>
          <div className='w-1/2 h-44 absolute bottom-0 own  backdrop-blur-sm bg-fixed text-white flex justify-center items-center rounded-t-2xl'>
             <a href='#body'>Click me</a> 
          </div>
      </div>
      <div className='h-dvh w-full flex justify-center items-center dark:bg-black dark:text-white'>
       <i class="fa-solid fa-r ani "></i>
        </div> 
   
      <div className='h-96 w-full bg-img1 bg-cover bg-no-repeat bg-center bg-fixed'>

      </div>
      <div id='body' className='h-dvh w-full bg-white'></div>
    </>
  )
}

export default App
