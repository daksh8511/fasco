import React from "react";

import image1 from "/assets/image1.png";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div className="container p-6">
      <div className="min-sm:block min-md:flex">
        <div className="border-r-2 min-sm:w-4/4 min-md:w-2/4 bg-[var(--special-color-sec)] leftbox">
          <img src={image1} alt="" />
        </div>
        <div className="min-sm:w-4/4 min-md:w-2/4 p-5 bg-[var(--special-color)]">
          <h4 className="mt-7 text-[#767676] mb-4">Men Collection</h4>
          <h2 className="!font-mydisplay text-5xl text-[#484848] mb-4">Peaky Blinders</h2>
          <h5 className="uppercase border-b-2 w-25 mb-4">description</h5>
          <p className="text-[#767676] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            nobis sint ipsum architecto sequi, earum non harum delectus
            reprehenderit eaque quo necessitatibus consequatur, soluta
            cupiditate.
          </p>
          <h2 className="font-bold text-2xl mb-4">$100.00</h2>
          <Link to={`/product_page/${16}`}>
          <button className="bg-black text-white px-10 py-3 rounded-2xl shadow-xl cursor-pointer">
            Buy Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
