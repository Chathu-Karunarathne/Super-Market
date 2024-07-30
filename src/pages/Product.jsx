import React from "react";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  return (
    <div className="h-[100vh]  p-10  bg-slate-300">
      <form className=" flex  justify-center">
        <div className="  relative">
          <input
            type="search"
            placeholder="Search by Product or Code"
            className="w-96 p-2 rounded-full text-center
            bg-slate-500"
          />
          <botton className="absolute left-4 top-3 translate-x-5   ">
            <FaSearch />
          </botton>
        </div>
      </form>
    </div>
  );
};

export default Product;
