import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="box-container">
        <div className="box">
            <h3>Location</h3>
            <a href="/">India</a>
            <a href="/">USA</a>
            <a href="/">South Korea</a>
            <a href="/">France</a>
            <a href="/">Italy</a>
        </div>

        <div className="box">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#dishes">Dishes</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#review">Review</a>
            <a href="#order">Order</a>
        </div>

        <div className="box">
            <h3>Contact Info</h3>
            <a href="/">+123-456-7890</a>
            <a href="/">+111-222-3333</a>
            <a href="/">shaikhan@gmail.com</a>
            <a href="/">bukeshbhai@gmail.com</a>
            <a href="/">Mumbai, India - 495006</a>
        </div>

        <div className="box">
            <h3>Follow Us</h3>
            <a href="/">Facebook</a>
            <a href="/">X</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            
        </div>
      </div>
      <div className="credit">Copyright @ 2024 by <span>Anubhav Sahu</span></div>
    </div>
  )
}

export default Footer
