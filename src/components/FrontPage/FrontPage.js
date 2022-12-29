import React from 'react'
 import Main1 from "../../pics/main.jpg"
 import "./FrontPage.css"

const FrontPage = () => {
  return (
    <div>
      
      <header>
    <div className = "head-text">
      <div className = "head-image">
        <img src = {Main1} alt = " Free" />
      </div>

      <div className="App">
      <div class='text-on-image'>
           <h3> Welcome to my <span className='regtext'>Gym</span> </h3>
           <p className='paragraph'> We Provide Our best opportunity and Qulified Trainers for best workout yourself as you want  </p>
           <button className='signUp'>signUp</button> <button className='view-detail'>View detail</button>
        </div>
       
    </div>

    </div>
  </header>
    </div>
  )
}

export default FrontPage
