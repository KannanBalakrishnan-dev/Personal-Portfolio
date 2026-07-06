import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Design from './pages/Design'
const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <Navbar/>
      <div className='flex-1 overflow-hidden'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/design' element={<Design/>}/>
        {/* <Route path='/work' element={}/> */}
      </Routes>
      </div>
    </div>
  )
}

export default App