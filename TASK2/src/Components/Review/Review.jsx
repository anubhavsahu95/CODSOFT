import React from 'react'
import './Review.css'
import person1 from '../../Assets/person1.jpg'
import person2 from '../../Assets/person2.jpg'
import person3 from '../../Assets/person3.jpg'
import person4 from '../../Assets/person4.jpg'
import person5 from '../../Assets/person5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='review' id='review'>
    <h3 className="sub-heading">Customer's Review</h3>
    <h1 className="heading">What they Say</h1>

    <Swiper
        slidesPerView={1}
        breakpoints={{
    0: {
      slidesPerView: 1,
    },
    750:{
      slidesPerView:2,
    },
    1180:{
      slidesPerView:3,
    },
  }}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="slider"
      >
        <div className="slider">
            <SwiperSlide>
            <div className="slide">
            <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={person1} alt="" />
                <div className="user-info">
                  <h3>Neha Kushwaha</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at quod? Deleniti quibusdam perferendis libero dignissimos sapiente. Quasi qui eius, natus repudiandae hic, consequatur aut iste quae tempora autem amet?</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="slide">
            <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={person4} alt="" />
                <div className="user-info">
                  <h3>Nitesh Kumar</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at quod? Deleniti quibusdam perferendis libero dignissimos sapiente. Quasi qui eius, natus repudiandae hic, consequatur aut iste quae tempora autem amet?</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="slide">
            <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={person3} alt="" />
                <div className="user-info">
                  <h3>Akash Gupta</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at quod? Deleniti quibusdam perferendis libero dignissimos sapiente. Quasi qui eius, natus repudiandae hic, consequatur aut iste quae tempora autem amet?</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="slide">
            <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={person2} alt="" />
                <div className="user-info">
                  <h3>Lawanya Desai</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at quod? Deleniti quibusdam perferendis libero dignissimos sapiente. Quasi qui eius, natus repudiandae hic, consequatur aut iste quae tempora autem amet?</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="slide">
            <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={person5} alt="" />
                <div className="user-info">
                  <h3>Piyush Sharma</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at quod? Deleniti quibusdam perferendis libero dignissimos sapiente. Quasi qui eius, natus repudiandae hic, consequatur aut iste quae tempora autem amet?</p>
            </div>
            </SwiperSlide>
            </div>
            
      </Swiper>

      
    </div>
  )
}

export default Review
