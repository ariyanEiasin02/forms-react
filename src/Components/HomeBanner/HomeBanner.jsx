import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import create from '../../assets/create.png'
const HomeBanner = () => {
  const [users, setUsers] = useState('')
  const data = useSelector(state => state.userLoginInfo.userInfo)
  useEffect(()=>{
    setUsers(data)
  })
  return (
    <div className='w-full py-64'>
        <div className="max-w-container mx-auto">
            {
              users ? 
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <div className="flex justify-center pb-2">
                  <img src={create} alt="" />
                  </div>
                    <h2 className='font-poppins font-bold text-4xl text-[#333] tracking-wide'>Quizzes await! Make One.</h2>
                    <p className='font-poppins font-light text-[#333] text-base tracking-wide my-3'>Click below to begin your journey here</p>
                    <button className='mt-3 font-poppins font-normal text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'>Create Quiz <span><FaArrowRight className='inline-block'/></span></button>
                </div>
            </div>
            :
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <h2 className='font-poppins font-bold text-4xl text-[#333] tracking-wide'>Learn 10x <span className='text-[#0A7443]'>Faster</span></h2>
                    <p className='font-poppins font-light text-[#333] text-base tracking-wide my-3'>Unlock Your Potential with personalized quizzes</p>
                    <button className='mt-3 font-poppins font-normal text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'>Get Started Now! <span><FaArrowRight className='inline-block'/></span></button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default HomeBanner