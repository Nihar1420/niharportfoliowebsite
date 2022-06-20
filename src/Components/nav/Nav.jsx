import React from 'react'
import './nav.css'
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'
import { TbFileCertificate } from 'react-icons/tb'
import { MdDesignServices } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsInfoCircleFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbFileCertificate /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
    </nav>
  )
}

export default Nav