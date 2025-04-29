import React from "react";

import logo from "/assets/logos/logo.png";
import logo2 from "/assets/logos/logo2.png";
import logo3 from "/assets/logos/logo3.png";
import logo4 from "/assets/logos/logo4.png";
import logo5 from "/assets/logos/logo5.png";

const Logos = () => {
  return (
    <div className="container p-6 py-20">
      <div className="grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-3 min-lg:grid-cols-5 gap-10">
        <img src={logo} alt="" className="max-sm:flex max-sm:m-auto" />
        <img src={logo2} alt="" className="max-sm:flex max-sm:m-auto" />
        <img src={logo3} alt="" className="max-sm:flex max-sm:m-auto" />
        <img src={logo4} alt="" className="max-sm:flex max-sm:m-auto" />
        <img src={logo5} alt="" className="max-sm:flex max-sm:m-auto" />
      </div>
    </div>
  );
};

export default Logos;
