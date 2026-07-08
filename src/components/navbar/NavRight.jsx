import React from 'react'
import { Link } from 'react-router-dom'
import "./Navright.css"
import Blackbgbtn from '../btns/Blackbgbtn'
const NavRight = () => {
    return (
        <div className='navright'>

            <Link to={'/'}>Home</Link>
            <Link to={'/design'}>Design</Link>
            <Link to={'/work'}>Work</Link>

            {/* btn */}
            <Blackbgbtn text={"Kannanbala192002@gmail.com"}/>
        </div>
    )
}

export default NavRight