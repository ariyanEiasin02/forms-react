import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const HomeBanner = () => {
  return (
    <div className='w-full py-64'>
        <div className="max-w-container mx-auto">
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <h2 className='font-poppins font-bold text-4xl text-[#333] tracking-wide'>Learn 10x <span className='text-[#0A7443]'>Faster</span></h2>
                    <p className='font-poppins font-light text-[#333] text-base tracking-wide my-3'>Unlock Your Potential with personalized quizzes</p>
                    <button className='mt-3 font-poppins font-normal text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'>Get Started Now! <span><FaArrowRight className='inline-block'/></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner