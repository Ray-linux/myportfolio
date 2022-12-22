import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'


export default function Project() {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG1} alt="image1" />
          </div>
          <h3>Analog Clock using HTML, CSS, Javascript</h3>
          <div className="project_item-cta">
            <a href="https://github.com/Ray-linux/Clock" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://ray-linux.github.io/Clock/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG2} alt="image1" />
          </div>
          <h3>Tic Tac Toe game using react js</h3>
          <div className="project_item-cta">
            {/* <a href="https://www.google.com" className='btn' target='_blank'>GitHub</a> */}
            <a href="https://ray-linux.github.io/tic-tac-toe/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG3} alt="image1" />
          </div>
          <h3>Weather Application using reactjs and Rapid api</h3>
          <div className="project_item-cta">
            {/* <a href="https://www.google.com" className='btn' target='_blank'>GitHub</a> */}
            <a href="https://ray-linux.github.io/weather/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}
