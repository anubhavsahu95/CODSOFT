import React from 'react'
import './Menu.css'
import manchurian from '../../Assets/manchurian.jpg'

const Menu = () => {
  return (
    <div className='menu' id='menu'>
      <h3 className="sub-heading">Our Menu</h3>
      <h1 className="heading">Today's Speciality</h1>

      <div className="box-container">

            <div className="box">
                <div className="image">
                    <img src={manchurian} alt="" />
                </div>
                <div className="content">
                    <h3>Manchurian</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, autem!</p>
                    <span className="price">$13.99</span>
                    <a href="/" className="btn">Add to Cart</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Menu
