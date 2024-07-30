import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Registerimage from "../assets/Registerimage.jpg";

export default function Register() {
  return (
    <div className="h-[100vh] flex  items-center bg-slate-300 justify-center text-white">
      <div className="flex items-center gap-20  w-[95%] p-5 rounded-md overflow-hidden">
        
        <img
          className="w-[75%] h-[450px] object-cover  rounded-xl"
          src={Registerimage}
          alt="Register"
        />
        <div className="h-[380px] w-[25%]  bg-slate-400 rounded-xl  px-6 ">
          <div className="">
            <h2 className="text-3xl font-bold pb-4 m-4 text-center">
              {" "}
              Register
            </h2>
            <form className="flex flex-col items-center" action="">
              <div className="w-full relative">
                <input
                  className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                  placeholder="Username"
                  type="text"
                />
                <FaUser className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                  placeholder="Email"
                  type="email"
                />
                <IoMdMail className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-500 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                  placeholder="Password"
                  type="password"
                />
                <FaLock className="absolute top-[35%] right-3" />
              </div>

              <button className="my-2 py-2 w-full rounded-full bg-slate-400">
                Register
              </button>
              <span>
                Already have an account?{" "}
                <span className="cursor-pointer">Login</span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
