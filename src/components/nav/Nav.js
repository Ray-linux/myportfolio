import React from 'react'
import {FiHome} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBlackBook} from 'react-icons/gi'
// import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'


import './nav.css'
export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a> 
      <a href="#experiance" onClick={() => setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}><GiBlackBook/></a>  
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}
