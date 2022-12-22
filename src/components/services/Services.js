import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
              <li><BsCheck2 className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
          </ul>
        </article>
{/* ----------------------------------------------------------------- */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className='service_list_icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
