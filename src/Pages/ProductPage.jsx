import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import svg from "/assets/SVG.png";
import payment_option from "/assets/payment_option.png";

import { FaTruckFast, FaBox } from "react-icons/fa6";

import { Data } from "../Data";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import NewArrivales from "../Components/NewArrivales/NewArrivales";
import Subscribe from "../Components/Subscribe/Subscribe";

const ProductPage = () => {
  document.documentElement.scrollTo({
    top: 0,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("items");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const getProduct = Data.filter((item) => item.id == id);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);
  
  const handleAddToCart = (item) => {
    setData([...data, item]);
  };

  return (
    <div>
      <Navbar />
      <div className="container p-6">
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-10">
          <div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {getProduct[0].images.map((item, i) => {
                return (
                  <SwiperSlide>
                    <img src={item} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {getProduct[0].images.map((item, i) => {
                return (
                  <SwiperSlide className="m-auto">
                    <img src={item} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div>
            <h2 className="text-3xl !font-mydisplay">{getProduct[0].pname}</h2>
            <div className="flex items-center gap-5 mt-4">
              <h2 className="text-2xl !font-mydisplay mt-4 ">
                ${getProduct[0].price}
              </h2>
              <span className="bg-green-600 text-white capitalize px-5 py-2 rounded-full">
                save 20%
              </span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <img src={svg} alt="eye_svg" />
              <span className="text text-[var(--gray-color)] font-light">
                24 people are viewing this right now
              </span>
            </div>
            <div
              className={`mt-3 ${
                getProduct[0].category == "men_accessories"
                  ? "hidden"
                  : getProduct[0].category == "women_accessories"
                  ? "hidden"
                  : "block"
              }`}
            >
              <span className="text-xl font-bold">Size : M</span>
              <ul className="flex items-center gap-5 *:bg-black *:text-white *:p-2 *:px-3 mt-2 *:cursor-pointer *:rounded-xl">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
            <div className="mt-4">
              <span className="!font-mydisplay">Quantity</span>
              <div className="flex gap-4 border border-gray-400 w-1/7 mt-2 items-center justify-center">
                <button
                  className="text-2xl cursor-pointer"
                  onClick={() => setQuantity(quantity == 0 ? 0 : quantity - 1)}
                >
                  -
                </button>
                <span className="text-2xl">{quantity}</span>
                <button
                  className="text-2xl cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(getProduct[0])}
              className="block my-4 bg-black text-white px-7 py-3 rounded-2xl cursor-pointer hover:bg-white hover:text-black hover:border duration-200"
            >
              Add To Cart
            </button>
            <button className="block my-4 bg-green-600 text-white px-7 py-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-600 hover:border duration-200">
              Buy Now
            </button>
            <div className="mt-10">
              <h2 className="uppercase border-b font-semibold !font-mydisplay">
                Description
              </h2>
              <p className="my-3 text-[var(--gray-color)]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                beatae sit temporibus atque voluptas perferendis vel eum,
                maiores assumenda provident, debitis cum, mollitia fugit vitae.
              </p>
            </div>
            <div className="mt-7">
              <div className="flex gap-3 items-center mb-3">
                <FaTruckFast size={20} />
                <span>Estimated Delivery : </span>
                <span>1 Jan - 4 Jan</span>
              </div>
              <div className="flex gap-3 items-center">
                <FaBox size={20} />
                <span>Free Shipping & Returns : </span>
                <span>On All Orders Over $10</span>
              </div>
            </div>
            <img src={payment_option} className="mt-10" alt="" />
          </div>
        </div>
      </div>
      <NewArrivales />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ProductPage;
