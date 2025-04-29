import React, { useState } from "react";
import { Data } from "../../Data";
import { Link } from "react-router-dom";

const NewArrivales = () => {
  const [myFilter, setMyFilter] = useState([]);

  const filterData = (item) => {
    let newfilter = item;
    setMyFilter(Data.filter((item) => item.category == newfilter));
  };

  const firstFive = Data.slice(0, 5);

  return (
    <div className="container p-6">
      <h2 className="!font-mydisplay text-center text-5xl mt-20 text-[var(--gray-color)]">
        New Arrivals
      </h2>
      <p className="text-center max-w-4xl m-auto mt-6 text-[#8A8A8A]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        libero nulla odit fugit sapiente magnam qui consequuntur quia optio
        recusandae.
      </p>

      <div className="mt-10 flex flex-col items-center">
        <ul className="grid grid-cols-2 min-sm:grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-5 items-center *:bg-gray-300 gap-5 *:cursor-pointer *:px-5 *:py-2 *:rounded-xl *:hover:bg-black *:hover:text-white *:duration-200 *:hover:shadow-2xl">
          <li onClick={() => filterData("men_cloth")}>Men's Fashion</li>
          <li onClick={() => filterData("women_cloth")}>Women's Fashion </li>
          <li onClick={() => filterData("women_accessories")}>
            Women Accessories
          </li>
          <li onClick={() => filterData("men_accessories")}>Men Accessories</li>
          <li onClick={() => filterData('men')}>Discount Deals</li>
        </ul>

        <div className="mt-10 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 gap-10">
          {myFilter.length == 0
            ? firstFive.map((item, i) => {
                return (
                  <Link to={`/product_page/${item.id}`}>
                  <div className="shadow-xl p-3" key={i}>
                    <div className="w-45 h-50 text-center m-auto">
                      <img
                        src={item.images[0]}
                        key={i}
                        className="w-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="m-auto">{item.pname}</h3>
                      <h5>(4.1k) Customer Reviews</h5>
                      <h2>${item.price}</h2>
                    </div>
                  </div>
                  </Link>
                );
              })
            : myFilter.map((item, i) => {
                return (
                  <Link to={`/product_page/${item.id}`}>
                  <div className="shadow-xl p-3">
                    <div className="w-45 h-50 text-center m-auto">
                      <img
                        src={item.images[0]}
                        key={i}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="line-clamp-1 mb-2">{item.pname}</h3>
                      <h5 className="mb-2">(4.1k) Customer Reviews</h5>
                      <h2>${item.price}</h2>
                    </div>
                  </div></Link>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivales;
