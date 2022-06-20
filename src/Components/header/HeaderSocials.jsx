import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiHackerrank } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.hackerrank.com/niharranjanhota2" target="_blank" rel="noopener noreferrer"><SiHackerrank /></a>
        </div>
    )
}

export default HeaderSocials