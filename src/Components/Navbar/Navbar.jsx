import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandle = () => setMenu((prev) => !prev);

  const getLengthLS = JSON.parse(localStorage.getItem('items'))

  return (
    <nav className="container p-6">
      <div className="flex justify-between items-center">
        <div className="!font-[Volkhov] text-3xl text-[var(--gray-color)]">
          FASCO
        </div>

        <div className="hidden min-sm:hidden min-md:hidden min-lg:flex items-center gap-14">
          <ul className="flex items-center gap-14 *:cursor-pointer">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to={'/cart'}>
              <FaShoppingCart size={20} />
              <span>{getLengthLS == null ? 0 : getLengthLS.length }</span>
              </Link>
            </li>
          </ul>
          <Link
            to="/signup"
            className="bg-black text-white py-3 px-7 rounded-full cursor-pointer"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex items-center gap-3 min-sm:flex min-md:flex min-lg:hidden">
          <Link to={`/cart`} className="text-black block min-md:block">
            <FaShoppingCart />
          </Link>
          <RiMenu5Fill
            size={35}
            className="border rounded-full p-2"
            onClick={menuHandle}
          />
        </div>
      </div>

      <AnimatePresence>
        {!menu ? null : (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-col items-center gap-4 bg-black min-sm:flex min-md:flex py-4 mt-2 rounded"
          >
            <ul className="*:cursor-pointer text-white *:text-center *:my-2">
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>

            <Link
              to="/signup"
              className="bg-white text-black justify-center py-3 px-7 rounded-full cursor-pointer flex"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
