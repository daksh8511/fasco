import React from "react";

import { Link } from "react-router-dom";

import signin from "/assets/signup/signin.png";
import google from "/assets/signup/google.png";
import gmail from "/assets/signup/gmail.png";

const SignIn = () => {
  return (
    <div className="container p-2">
      <div className="grid grid-cols-1 min-md:grid-cols-2">
        <div className="m-auto hidden min-md:block">
          <img src={signin} className="w-100" alt="" />
        </div>
        <div className="p-10">
          <h2 className="!font-mydisplay text-3xl min-md:text-6xl uppercase mb-10">
            fasco
          </h2>
          <div>
            <h4 className="!font-mydisplay text-2xl min-md:text-3xl mb-7">
              Sign In
            </h4>
            <div className="block min-lg:flex items-center gap-5 mb-9">
              <div className="flex items-center gap-3 border border-[#5B86E5] p-3 rounded-xl mb-3 min-lg:mb-0">
                <img src={google} className="w-5" alt="" />
                <h4>Sign up with Google</h4>
              </div>
              <div className="flex items-center gap-3 border border-[#5B86E5] p-3 rounded-xl">
                <img src={gmail} className="w-6" alt="" />
                <h4>Sign up with Gmail</h4>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center mb-7">
              <span className="leftline"></span>
              <h3 className="text-gray-500 font-bold">OR</h3>
              <span className="rightline"></span>
            </div>
            <div>
              <form action="" className="grid grid-cols-1 gap-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                />
              </form>
              <Link to="/fasco">
                <button className="bg-black text-white w-full mt-5 py-3 rounded-full">
                  Sign In
                </button>
              </Link>
            </div>
            <Link
              to="/signup"
              className="border border-blue-600 rounded-full flex w-full justify-center py-3 mt-5"
            >
              Register Now
            </Link>
            <Link
              className="text-blue-600 flex justify-end text-[10px] min-md:text-[15px] mt-3"
              to="/forgotpassword"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
