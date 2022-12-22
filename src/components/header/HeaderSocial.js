import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'

export default function HeaderSocial() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><CiLinkedin/></a>
      <a href="https://github.com/Ray-linux/" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
      <a href="https://www.codechef.com/users/carlos39" target="_blank" rel="noreferrer"><SiCodechef/></a>
    </div>
  )
}
