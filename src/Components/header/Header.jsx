import React from 'react'
import CTA from './CTA'
import Formal from '../../Assets/Formalpic.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Nihar Ranjan Hota</h1>
        <h5 className="text-light">Front-End Web Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={Formal} alt="formal" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header