import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Niharmg.jpg'
import IMG2 from '../../Assets/Nihartution.jpg'
import IMG3 from '../../Assets/Niharnotes.png'
import IMG4 from '../../Assets/Niharnursery.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_conatiner">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img1" />
          </div>
          <h3>Nihar Tution's</h3>
          <a href="https://github.com/Nihar1420/niharstutionss.github.io.git" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="img1" />
          </div>
          <h3>Nihar Notes</h3>
          <a href="https://github.com/Nihar1420/NiharNotes.github.io.git" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img1" />
          </div>
          <h3>Nihar Nursery</h3>
          <a href="https://github.com/Nihar1420/niharsnursery.github.io.git" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Github</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>Nihar Musical Gallery</h3>
          <a href="https://github.com/Nihar1420/niharmusicalgallery.github.io.git" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio