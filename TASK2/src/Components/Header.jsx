import React, { useRef} from 'react'
import './Header.css'

const Header = () => {

    const navRef=useRef();
    const opensearchRef=useRef();

    const handleMenuBars=(e)=>{
        navRef.current.classList.toggle('active');
        e.target.classList.toggle('fa-times');
        e.target.classList.toggle('active');
    }

    const openSearch=()=>{
      opensearchRef.current.classList.toggle('activate');
    }
    const closeSearch=()=>{
      opensearchRef.current.classList.remove('activate');
    }



  return (
    <div className='header'>
      <a href="/" className='logo'><i className="fas fa-utensils"></i>Hungerr</a>

      <nav ref={navRef} className="navbar">
        <a className='active' href="#home">Home</a>
        <a href="#dishes">Dishes</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#order">Order</a>
      </nav>

      <div className="icons">
        <i onClick={handleMenuBars} className="fas fa-bars" id="menu-bars"> </i>
        <i onClick={openSearch} className="fas fa-search" id="search-icon"> </i>
        <a href="/" className="fas fa-heart"> </a>
        <a href="/" className="fas fa-shopping-cart"> </a>
      </div>

      <form ref={opensearchRef} action="" className="search-form">
        <input type="search" placeholder='Search Here ...' id="search-box"/>
        <label htmlFor="search-box" className="fas fa-search"></label>
        <i onClick={closeSearch} className="fas fa-times" id="close"></i>
      </form>

    </div>
  )
}

export default Header
