import React from "react";

import { Link } from "react-router-dom";

import signin from "/assets/signup/signin.png";

const ForgotPassword = () => {
  return (
    <div className="container p-2 min-md:p-6">
      <div className="grid grid-cols-1 min-md:grid-cols-2">
        <div className="m-auto hidden min-md:block">
          <img src={signin} className="w-100" alt="" />
        </div>
        <div className="p-10">
          <h2 className="!font-mydisplay text-3xl min-md:text-6xl uppercase mb-20">
            fasco
          </h2>
          <div>
            <h4 className="!font-mydisplay text-2xl min-md:text-3xl mb-7">
              Forgot Password
            </h4>

            <div>
              <form action="" className="grid grid-cols-1 gap-5 mb-5">
                <input
                  type="email"
                  placeholder="Enter Email Address or Phone Number"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                />
              </form>
              <Link to='/confirmwindow' className="bg-black text-white w-full flex justify-center py-3 rounded-full cursor-pointer">
              Send Confirmation Code
              </Link>
            </div>
            <button className="mt-5 flex ms-auto">Already Have An Account? <Link to='/signin' className="ms-1 text-blue-600">Sign In</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
