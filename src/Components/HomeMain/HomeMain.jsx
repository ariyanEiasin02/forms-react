import React from 'react'
import logo from '../../assets/question.png'
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const HomeMain = () => {
  return (
    <div className='py-4 bg-white'>
        <div className="max-w-container mx-auto">
            <nav className='flex justify-between items-center'>
                <div className="flex items-center">
                    <img src={logo} alt="logo" />
                    <h2 className='ml-2 font-poppins font-bold text-2xl text-[#333]'>Forms <span className='text-[#0A7443]'>Spark</span></h2>
                </div>
                <div className="">
                    <Link to='/login'>
                    <button className='font-poppins font-medium text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'><span><RiLoginCircleLine className='inline-block'/></span> Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default HomeMain