import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills that i have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>HTML</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>CSS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>Javascript</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>React js</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>Next js</h4>
                <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>Node js</h4>
                <small className='text-light'>Basic</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div> <h4>Express js</h4>
                <small className='text-light'>Basic</small></div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_icons' />
              <div><h4>Mongo Db</h4>
                <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience