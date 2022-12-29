import React from 'react'
import "./Trainer.css"
import sonu from "../../pics/sonu.jpg"

const Trainer = () => {
  return (
    <div>
       <h1 className='trainers'>Frofessional Trainers</h1>
   <div className='all-trainer'>

      <div>
        <img  className='sonuImg' src={sonu} alt=' '></img>
        <h1 className='trainer-name'> Sonu Kumar Yadav</h1>
        <p className='para'>Vaishali, Bihar</p>
      </div>
      <div>
        <img className='sonuImg' src='https://img.freepik.com/free-photo/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hands_496169-2795.jpg?w=2000' alt=' '></img>
        <h1 className='trainer-name'> Liza Tres</h1>
        <p className='para'>USA</p>
      </div>
      <div>
        <img className='sonuImg' src='https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?b=1&s=170667a&w=0&k=20&c=iuz1kcCB1w8CBf44nub1mYr-F--88dLRjJvM-5uPahY=' alt=' '></img>
        <h1 className='trainer-name'> John Doe</h1>
        <p className='para'>California</p>
      </div>
   </div>
   <div class="container">
        <div class="grid">
            <div class="card">
                <h2 class="card_title">Student</h2>
                <p class="pricing">20$<span class="small">/per month</span></p>
                <p>Save $9</p>
                   <ul class="features">
                    <li>One account</li>
                    <li>Unlimited songs</li>
                    <li>Customized playlist</li>
                </ul>
                <a href="#" class="cta_btn">Buy Now</a>
            </div>
            <div class="card">
                <h2 class="card_title">Personal</h2>
                <p class="pricing">39$<span class="small">/per month</span></p>
                <p>Save $15</p>
                
                <ul class="features">
                    <li>One account</li>
                    <li>Unlimited songs</li>
                    <li>Customized playlist</li>
                </ul>
                 <a href="#" class="cta_btn">Buy Now</a>
            </div>
            <div class="card">
                <h2 class="card_title">Family</h2>
                <p class="pricing">60$<span class="small">/per month</span></p>
                <p>Save $25</p>
                
                <ul class="features">
                    <li>Six account</li>
                    <li>Unlimited songs</li>
                    <li>Customized playlist</li>
                </ul>
                 <a href="#" class="cta_btn">Buy Now</a>
            </div>
        </div>
    </div>



   </div>
  )
}

export default Trainer
