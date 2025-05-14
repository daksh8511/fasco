import React, { useEffect, useState } from "react";

import "./MonthlyDeal.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Autoplay } from "swiper/modules";
import { Data } from "../../Data";
import { Link } from "react-router-dom";

const MonthlyDeal = () => {
  const findedImage = Data.filter((item) => item.category == "men_cloth");

  return (
    <div className="container p-6 py-20 bg-[var(--low-gray-color)]">
      <div className="gap-10 items-center block min-sm:block md:flex">
        <div className="min-sm:w-5/5 min-sm:mb-5 min-md:w-2/5">
          <h2 className="title text-5xl mb-4">Deals of the month</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            exercitationem vero quam temporibus officiis. Tenetur impedit maxime
            aperiam.
          </p>
          <button className="bg-black text-white py-3 px-10 cursor-pointer rounded-xl mb-4">
            Buy Now
          </button>

          <div>
            <h5 className="mb-3">Hurry, Before it's too late!</h5>
            <div className="flex gap-5">
              <div className="text-center">
                <h2 className="bg-white p-2 text-xl">day</h2>
                <span>Days</span>
              </div>
              <div className="text-center text-xl">
                <h2 className="bg-white p-2 shadow">hour</h2>
                <span>Hr</span>
              </div>
              <div className="text-center text-xl">
                <h2 className="bg-white p-2 shadow">min</h2>
                <span>Mins</span>
              </div>
              <div className="text-center text-xl">
                <h2 className="bg-white p-2 shadow">sec</h2>
                <span>Sec</span>
              </div>
            </div>
          </div>
        </div>
        <div className="min-sm:w-5/5 min-md:w-3/5">
          <Swiper
            spaceBetween={30}
            freeMode={true}
            breakpoints={{
              480: {
                slidesPerView: 4,
              },
              482: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {findedImage.map((item, i) => {
              return (
                <SwiperSlide className="bg-white">
                  <Link to={`/product_page/${item.id}`}>
                    <img className="h-60 m-auto" src={item.images[0]} alt="" />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MonthlyDeal;
