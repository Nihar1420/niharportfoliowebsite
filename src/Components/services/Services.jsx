import React from 'react'
import './services.css'
import {HiOutlineCheckCircle} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
      <h5>I offer</h5>
      <h2>Services like</h2>

      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX design</h3>
          </div>
         <ul className="service_list">
          <li>
            <HiOutlineCheckCircle className='service_list-icon'/>
            <p>I can make responsive website designs using Figma and Canva</p>
          </li>
         </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>
         <ul className="service_list">
          <li>
            <HiOutlineCheckCircle className='service_list-icon'/>
            <p>I can make responsive dynamic websites like this portfolio website using React js</p>
          </li>
         </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Problem Solving</h3>
          </div>
         <ul className="service_list">
          <li>
            <HiOutlineCheckCircle className='service_list-icon'/>
            <p>I practice problem solving using JAVA</p>
          </li>
         </ul>
        </article>
      </div>
    </section>
  )
}

export default Services