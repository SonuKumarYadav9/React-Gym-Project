import React from 'react'
import "./Header.css"
import Main1 from "../../pics/main.jpg"
// import Main2 from "../../pics/main2.jpg"
import Main3 from "../../pics/main3.jpg"

const Header = () => {
  return (
    <header>
    <div className = "head-text">
      <div className = "head-image">
        <img src = {Main1} alt = " Free" />
      </div>
        <div class='text-on-image'>
           <h3> Welcome to my Gym </h3>
           <p> We Provide Our best opportunity and Qulified Trainers for best workout yourself as you want  </p>
           <button className='signUp'>signUp</button> <button className='view-detail'>View detail</button>
        </div>
    </div>
  </header>
  )
}

export default Header
