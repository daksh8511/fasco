import React from "react";
import "./SignUp.css";

import signup from "/assets/signup/signup.png";

import google from "/assets/signup/google.png";
import gmail from "/assets/signup/gmail.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container p-2">
      <div className="grid grid-cols-1 min-md:grid-cols-2">
        <div className="m-auto hidden min-md:block">
          <img src={signup} className="w-100" alt="" />
        </div>
        <div className="p-10">
          <h2 className="!font-mydisplay text-3xl min-md:text-6xl uppercase mb-10">fasco</h2>
          <div>
            <h4 className="!font-mydisplay text-2xl min-md:text-3xl mb-7">Create Account</h4>
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
              <form action="" className="grid grid-cols-1 min-md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0"
                  required
                />
              </form>
              <Link to='/signin' className="bg-black text-white w-full mt-5 flex justify-center py-3 rounded-full">
                Create Account
              </Link>
              
            </div>
            <h4 className="mt-5 text-[10px] min-md:text-[15px]">Already Have An Account? <Link className="text-blue-600" to='/signin'>Sign In</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
