import React from "react";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  return (
    <div className="min-h-screen p-2 bg-slate-300 text-slate-800">
      {/* nav bar */}
      <div className="border-b-2 flex items-center justify-between px-4 pb-2">
        <h3 className="font-semibold text-xl uppercase text-slate-800 cursor-default">Super</h3>
        <form className="flex items-center gap-4">
          <div className="relative w-72">
            <FaSearch className="absolute top-2 left-3 text-slate-500" />
            <input
              type="search "
              placeholder="Search by Product"
              className="py-1 px-3 rounded-md pl-10 w-full"
            />
          </div>
          <button className="border-2 border-slate-700 bg-white px-2 rounded-lg hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300">Search</button>
        </form>
      </div>
      {/* main content */}
      <div>
        {/* side bar */}
        <div></div>
        {/* list veiw */}
        <div></div>
      </div>
    </div>
  );
};

export default Product;
