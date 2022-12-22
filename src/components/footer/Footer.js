import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {CiLinkedin} from 'react-icons/ci'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ray_linux</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><CiLinkedin/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; CScoder Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}
