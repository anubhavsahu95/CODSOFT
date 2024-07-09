import React from 'react'
import './Order.css'

export default function Order() {
  return (
    <div className='order' id='order'>
      <h3 className="sub-heading">Order Now</h3>
      <h1 className="heading">Free and Fast</h1>

      <form action="">
        <div className="inputBox">
            <div className="input">
                <span>Your Name</span>
                <input type="text" placeholder='Name' />
            </div>
            <div className="input">
                <span>Your Number</span>
                <input type="number" placeholder='Mob. No.' />
            </div>
            <div className="input">
                <span>Your Order</span>
                <input type="text" placeholder='Enter Food Name' />
            </div>
            <div className="input">
                <span>Additional Food</span>
                <input type="text" placeholder='Extra with food' />
            </div>
            <div className="input">
                <span>Quantity</span>
                <input type="number" placeholder='How manu Orders' />
            </div>
            <div className="input">
                <span>Date & Time</span>
                <input type="datetime-local"/>
            </div>
            <div className="input">
                <span>Your Address</span>
                <textarea placeholder='Enter your Address' cols={30} rows={5}></textarea>
            </div>
            <div className="input">
                <span>Your Message</span>
                <textarea placeholder='Enter your Message' cols={30} rows={5}></textarea>
            </div>
        </div>

        <input type="submit" value="order now" className="btn" />
      </form>
    </div>
  )
}
