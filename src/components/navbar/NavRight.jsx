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
<<<<<<< HEAD
            <Blackbgbtn text={"Kannanbala192002@gmail.com"}/>
=======
            <Blackbgbtn text={"Hire Me!"}/>
>>>>>>> 70ef8f7eb4c5eb38bb5836c40dc530e0d474ef11
        </div>
    )
}

export default NavRight