import React, { useState } from 'react'
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login() {

const [open, setOpen] = useState(false)

  return (
    <div className='h-[100vh] flex flex-col items-center  justify-center text-white'>
      <div className='h-[350px] w-80 bg-green-800 rounded-lg px-6  my-4'>
        <div>
          <h2 className='text-3xl font-bold pb-6 text-center'> Register</h2>
          <from className= "flex flex-col items-center" action="">
            <div className='w-full relative'>
              <input className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Username" type="text"/>
              <FaUser className='absolute top-[35%] right-3' />
            </div>
            <div className='w-full relative'>  
              <input className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Email" type="email"/>
              <IoMdMail className='absolute top-[35%] right-3' />
            </div>
            <div className='w-full relative' >
              <input className="border border-gray-500 w-full rounded-full py-2 px-4 mt-2 bg-transparent" placeholder="Password" type="password"/>
              
              <FaLock className='absolute top-[35%] right-3' />
            </div>
            <button className='my-2 py-2 w-full rounded-full bg-green-800'>Register</button>
            <span>Already have an account? <span>Login</span></span>
          </from>
        </div>
      </div>
    </div>
  );
};
