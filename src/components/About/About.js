import React from 'react'
import Image2 from "../../pics/main3.jpg"
import "./About.css"

const About = () => {
  return (
    <div className='main'>
<h1>About</h1>
 <div className='all-about'>
 <img src={Image2} alt=" " ></img>
 <ul className='contant'>
    <li> Choice Your Service </li>
    <li> Schedual Your Time </li>
    <li> Provide Your Service</li>
  </ul>
 </div>
 
    </div>

  )
}

export default About
