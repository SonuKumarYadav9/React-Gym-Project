import React from 'react'
import "./Trainer.css"
import sonu from "../../pics/sonu.jpg"

const Trainer = () => {
  return (


    <div>
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
