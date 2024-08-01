import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Registerimage from "../assets/Registerimage.jpg";
import { Link } from "react-router-dom";

export default function Register() {
     


  return (
    <div className="h-[100vh] flex  items-center bg-slate-400 justify-center text-white">
      <div className="flex items-center gap-20  w-[95%] p-5 rounded-md overflow-hidden">
        <img
          className="w-[75%] h-[450px] object-cover  rounded-xl"
          src={Registerimage}
          alt="Register"
        />
        <div className="h-[400px] w-[25%]  bg-slate-500 rounded-xl  px-6 ">
          <div className="">
            <h2 className="text-3xl font-bold pb-2 m-4 text-center">
              {" "}
              Register
            </h2>
            <form className="flex flex-col items-center" action="">
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                  name="username"
                  placeholder="Username"
                  type="text"
                />
                <FaUser className="absolute top-[35%]  right-3" />
              </div>
              <div className="w-full  relative">
                <input
                  className="border border-gray-600 w-full rounded-full  py-2 px-4 my-2 bg-transparent"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <IoMdMail className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <FaLock className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                  name="password"
                  placeholder="Conform password"
                  type="password"
                />
                <FaRegEyeSlash className="absolute top-[35%] right-3" />
              </div>

              <button className="my-2 py-2 w-full rounded-full bg-slate-500">
                Register
              </button>
              <span>
                Already have an account?{" "}
                <span className="cursor-pointer">
                  <Link to="/login">Login</Link>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
