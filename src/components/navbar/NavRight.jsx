// src/components/navbar/NavRight.jsx
import React from 'react'
import "./Navright.css"
import Blackbgbtn from '../btns/Blackbgbtn'
import HoverMenu from '../../pages/Hovermenu'

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const NAV_SOCIALS = [
  { label: "GitHub", href: "https://github.com/KannanBalakrishnan-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kannan-balakrishnan-409911282/" },
  { label: "Twitter / X", href: "https://x.com/" },
];

const NavRight = () => {
  return (
    <div className='navright' style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <HoverMenu brand="Menu" badge="Open to work" items={NAV_ITEMS} socials={NAV_SOCIALS} />
      <Blackbgbtn text={"Get in touch"} />
    </div>
  )
}

export default NavRight