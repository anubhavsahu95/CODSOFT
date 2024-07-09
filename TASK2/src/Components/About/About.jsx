import React from 'react'
import './About.css'
import spagheti from '../../Assets/spagheti.jpg'

const About = () => {
  return (
    <div className='about' id="about">
      <h3 className="sub-heading">About Us</h3>
      <h1 className="heading">Why Choose Us ?</h1>

      <div className="row">
            <div className="image">
                <img src={spagheti} alt="" />
            </div>

            <div className="content">
                <h3>Best Food in the Country</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex non alias tempore perferendis eum reprehenderit rerum nobis animi corporis nisi.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore cupiditate quibusdam quae nisi sit!</p>

                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-shipping-fast"></i>
                        <span>Free Delivery</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-dollar-sign"></i>
                        <span>Easy Payments</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-headset"></i>
                        <span>24/7 Service</span>
                    </div>
                </div>
                <a href="/" className="btn">Learn more</a>
            </div>
      </div>

    </div>
  )
}

export default About
