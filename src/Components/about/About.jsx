import React from 'react'
import './about.css'
import Formal from '../../Assets/Formalpic.png'
import { FaAward } from 'react-icons/fa'
import {HiOutlineChip} from 'react-icons/hi'
import {AiOutlineProject} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Formal} alt="aboutmepic" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Currently a Fresher </small>
            </article>
            <article className="about_card">
              <HiOutlineChip className='about_icon' />
              <h5>Technologies learnt</h5>
              <small>React js and  Next js</small>
            </article>
            <article className="about_card">
              <AiOutlineProject className='about_icon' />
              <h5>Projects</h5>
              <small>5 static responsive projects</small>
            </article>
          </div>
          <p>I am an aspiring Front-end Web Developer willing to
            explore the never ending journey of Software and Web
            Development with various modern technologies like React
            js and Next js. Precision and Practice leads to Perfection is
            my mantra .</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About