import React from "react";
import SliderViewed from "./SliderViewed";
import "./SliderViewed.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation } from "swiper";

export default function SliderViewedList({ data }) {
  return (
    <>
      <div className="text-center mt-4 mb-4">
        <h3 className="">Productos Mas Vistos</h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="container ">
                <div className="">
                  <SliderViewed
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    title={item.title}
                    img={item.img}
                    category={item.category}
                    stock={item.stock}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

/* <div className="container mt-5">
        <div className=" d-flex g-3 row">
          {data.map((item) => {
            return (
              <Slider
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                category={item.category}
                stock={item.stock}
              />
            );
          })}
        </div>
      </div> */
