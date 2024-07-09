import React from 'react'
import './Dishes.css'
import burger from '../../Assets/burger.jpg'
import pizza from '../../Assets/pizza2.jpg'
import coffee from '../../Assets/coffee.jpg'
import footlong from '../../Assets/footlong.jpg'
import fried_rice from '../../Assets/fried_rice.jpg'
import momos from '../../Assets/momos.jpg'
import corn from '../../Assets/corn.jpg'
import egg from '../../Assets/egg_sabzi.jpg'

const Dishes = () => {
  return (
    <div className='dishes' id="dishes">
      <h3 className="sub-heading">Our Dishes</h3>
      <h1 className="heading">Popular Dishes</h1>

    <div className="box-container">

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={burger} alt="" />
        <h3>Cheeze Burger</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={pizza} alt="" />
        <h3>Farmhouse Pizza</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={coffee} alt="" />
        <h3>Espresso</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={footlong} alt="" />
        <h3>Paneer Footlong</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={fried_rice} alt="" />
        <h3>Fried Rice</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <img src={momos} alt="" />
        <h3>Veg Momos</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <div className="image">
        <img src={corn} alt="" /></div>
        <h3>Corn Curry</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      <div className="box">
        <a href="/" className="fas fa-heart"> </a>
        <div className="image">
        <img src={egg} alt="" /></div>
        <h3>Egg Curry</h3>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="/" className="btn">Add to Cart</a>
      </div>

      
    </div>
    </div>
  )
}

export default Dishes
