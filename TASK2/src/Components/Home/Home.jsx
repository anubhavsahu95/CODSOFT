import React from "react";
import "./Home.css";
import noodle_image from "../../Assets/noodle.jpg";
import fries_image from "../../Assets/fries.bmp";
import pizza_image from "../../Assets/pizza.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div id="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div>
            <SwiperSlide>
              <div className="slide">
                <div className="content">
                  <span>Our Special Dish</span>
                  <h3>Spicy Noodles</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore, iure!
                  </p>
                  <a href="/" className="btn">
                    Order Now
                  </a>
                </div>
                <div className="image">
                  <img src={noodle_image} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide">
                <div className="content">
                  <span>Our Special Dish</span>
                  <h3>Fried Chicken</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore, iure!
                  </p>
                  <a href="/" className="btn">
                    Order Now
                  </a>
                </div>
                <div className="image">
                  <img src={fries_image} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide">
                <div className="content">
                  <span>Our Special Dish</span>
                  <h3>Hot Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore, iure!
                  </p>
                  <a href="/" className="btn">
                    Order Now
                  </a>
                </div>
                <div className="image">
                  <img id="image3" src={pizza_image} alt="" />
                </div>
              </div>
            </SwiperSlide>
            </div>
      </Swiper>
    </div>
  );
};

export default Home;
