import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import SideBar from './components/SideBar';

function App() {
  const [view,setView]=useState(false);
  const handleSideBar=(e)=>{
    setView(preView=>!preView);
  }

  return (
    <>
        {/* <div className=' flex justify-center items-center h-dvh w-full'>
            <Landing />
        </div> */}
        <div id='hero' className=' flex justify-center items-center h-dvh w-full '>
          
            <Header handleSideBar={handleSideBar}/>
          
            <Hero view={view}/>
            <SideBar view={view} handleSideBar={handleSideBar}/>
        </div>
        

    </>
  )
}

export default App
