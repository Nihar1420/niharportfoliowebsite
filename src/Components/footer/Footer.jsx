import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiHackerrank } from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Nihar1420/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.hackerrank.com/niharranjanhota2" target="_blank" rel="noopener noreferrer"><SiHackerrank /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Nihar Ranjan Hota. All rights reserved</small>
      </div>
      </div>
    </footer>
  )
}

export default Footer
