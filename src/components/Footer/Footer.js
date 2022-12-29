import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
<footer class="footer-distributed">

    <div class="footer-right">
        

        <a href='https://instagram.com/'><i class="fa-brands fa-instagram"></i>In</a>
        <a href="#"><i class="fa fa-twitter"></i>twi</a>
        <a href="#"><i class="fa fa-linkedin"></i>In</a>
        <a href="#"><i class="fa fa-github"></i>Git</a>


    </div>

    <div class="footer-left">

        <p class="footer-links">
            <a class="link-1" href="#">About</a>

            <a href="#">Home</a>

            <a href="#">Pricing</a>

            <a href="#">Program</a>

        </p>

        <p>Sonu Kumar Yadav &copy; 2022</p>
    </div>

</footer>
  )
}

export default Footer


