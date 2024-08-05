import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center bg-slate-300 justify-center text-white'>
      <div className='h-[350px] w-80 bg-slate-400 rounded-xl px-6 my-4'>
        <div className=''>
          <h2 className='text-3xl font-bold pb-4 m-4 text-center'>Login</h2>
          <form className="flex flex-col items-center" action="">
            <div className='w-full relative'>
              <input className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Email" type="email"/>
              <IoMdMail className='absolute top-[35%] right-3' />
            </div>
            <div className='w-full relative'>
              <input className="border border-gray-500 w-full rounded-full py-2 px-4 mt-2 bg-transparent" placeholder="Password" type="password"/>
              <FaLock className='absolute top-[35%] right-3' />
            </div>
            <button className='my-2 py-2 w-full rounded-full bg-slate-400'>Login</button>
            <span>Don't have an account? <span className='cursor-pointer'><Link to="/register"> Register </Link>
              </span></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


