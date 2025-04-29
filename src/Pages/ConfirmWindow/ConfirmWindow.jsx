import React from 'react'

import { Link } from 'react-router-dom'

import signin from '/assets/signup/signin.png'

const ConfirmWindow = () => {
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
              Enter The Confirmation Code
            </h4>

            <div>
                <input
                  type="email"
                  placeholder="Confirmation Code"
                  className="border-b-2 border-[var(--low-gray-color)] outline-0 w-full"
                />
              <Link to='/fasco' className="bg-black text-white w-full flex justify-center mt-5 py-3 rounded-full cursor-pointer">
                Recover Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmWindow