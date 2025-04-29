import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="p-6">
        <h2 className="!font-mydisplay text-5xl text-center">Shopping Cart</h2>

        <div className="mt-20 flex gap-4">
          {/* all products -- LEFT SIDE */}
          <div className="w-3/4 bg-[var(--low-gray-color)] p-4 space-y-3">
            <div className="flex justify-between relative">
              <div className="box flex gap-2">
                <div className="w-20">
                  <img
                  src="https://static.helioswatchstore.com/media/catalog/product/5/5/5519459_1_2_1.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Mini dress with ruffled straps</h2>
                  <h3>Quantity : 02</h3>
                  <h3>Price : $100.00</h3>
                </div>
              </div>
              <div className="absolute right-0">
                <button className="cursor-pointer bg-red-600 text-white px-7 py-2 rounded-full">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex justify-between relative">
              <div className="box flex gap-2">
                <div className="w-20">
                  <img
                    src="https://static.helioswatchstore.com/media/catalog/product/5/5/5519459_1_2_1.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Mini dress with ruffled straps</h2>
                  <h3>Quantity : 02</h3>
                  <h3>Price : $100.00</h3>
                </div>
              </div>
              <div className="absolute right-0">
                <button className="cursor-pointer bg-red-600 text-white px-7 py-2 rounded-full">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex justify-between relative">
              <div className="box flex gap-2">
                <div className="w-20">
                  <img
                    src="https://static.helioswatchstore.com/media/catalog/product/5/5/5519459_1_2_1.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Mini dress with ruffled straps</h2>
                  <h3>Quantity : 02</h3>
                  <h3>Price : $100.00</h3>
                </div>
              </div>
              <div className="absolute right-0">
                <button className="cursor-pointer bg-red-600 text-white px-7 py-2 rounded-full">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* total box -- RIGHT SIDE */}
          <div className="w-1/4 relative space-y-2.5">
            <div className="flex justify-between">
                <h2>Subtotal : </h2>
                <h2>$200.00</h2>
            </div>
            <div className="flex justify-between">
                <h2>Sale Tex : </h2>
                <h2>$102.00</h2>
            </div>
            <div className="flex justify-between">
                <h2>Coupon Code : </h2>
                <h2>Add Coupon Code</h2>
            </div>
            <div className="flex absolute bottom-0 items-center justify-between border-t w-full pt-2">
                <h2>Grand Total : </h2>
                <h2 className="font-bold text-2xl">$302.00</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
