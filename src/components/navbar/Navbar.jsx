import React from 'react'
import Navleft from './Navleft'
import NavRight from './NavRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[5rem] py-[2rem]'>
        <Navleft/>
        <NavRight/>
    </div>
  )
}

export default Navbar