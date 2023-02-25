import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import IMG7 from '../../assets/project7.png'

export default function Project() {
  const data = [
    {
      id: 1,
      Image: IMG1, 
      title: "Analog Clock using HTML, CSS, Javascript",
      github: 'https://github.com/Ray-linux/Clock',
      demo:'https://ray-linux.github.io/Clock/',
    },
    {
      id: 2,
      Image: IMG2, 
      title: "Tic Tac Toe game using react js",
      github: 'https://github.com/Ray-linux/tic-tac-toe',
      demo:'https://www.tic-tac-toe-game.ml/',
    },
    {
      id: 3,
      Image: IMG3, 
      title: "Weather Application using React JS and Rapid api",
      github: 'https://github.com/Ray-linux/weather',
      demo:'https://www.weatherdetails.ml/',
    },
    {
      id: 4,
      Image: IMG4, 
      title: "Movies details Application using React JS and TMDB APIs",
      github: 'https://github.com/Ray-linux/Movie_application_using_api',
      demo:'https://www.graduatemoviewala.ml/',
    },
    {
      id: 5,
      Image: IMG5, 
      title: "Todo web app using react js(for LGM)",
      github: 'https://github.com/Ray-linux/to_do',
      demo:'https://todo-qp2a.onrender.com/',
    },
    {
      id: 6,
      Image: IMG6, 
      title: "calculator using react js(for LGM)",
      github: 'https://github.com/Ray-linux/Calculator2.0',
      demo:'https://calculator-9auj.onrender.com/',
    },
    {
      id: 7,
      Image: IMG7, 
      title: "Student Enrolment Form using react js(for LGM)",
      github: 'https://github.com/Ray-linux/student-enrolment-form',
      demo:'https://student-enrolment-form.onrender.com/',
    },
  ]
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {
          data.map(({id, Image, title, github, demo}) => {
            return (
              <article key={id} className='project_item'>
              <div className="project_item_image">
                <img src={Image} alt="image1" />
              </div>
              <h3>{title}</h3>
              <div className="project_item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
