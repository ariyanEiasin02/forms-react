import React, { useEffect, useState } from 'react'
import logo from '../../assets/question.png'
import { Link } from 'react-router-dom';
import { CiLogout,CiLogin  } from "react-icons/ci";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
const HomeMain = () => {
    const data = useSelector(state => state.userLoginInfo.userInfo)
    const db = getDatabase();
    const [users, setUsers] = useState('')
    useEffect(() => {
        setUsers(data)
    })
    return (
        <div className='py-4 bg-white md:px-0 px-4'>
            <div className="max-w-container mx-auto">
                <nav className='flex justify-between items-center'>
                    <div className="flex items-center">
                        <img src={logo} alt="logo" />
                        <h2 className='ml-2 font-poppins font-bold text-2xl text-[#333]'>Forms <span className='text-[#0A7443]'>Spark</span></h2>
                    </div>
                    {
                        users ?

                            <div className="flex items-center">
                                <div className="mr-4">
                                    <h2 className='font-poppins font-bold text-xl text-[#333] tracking-wide'>Welcome : <span className='text-[#0A7443]'>Ariyan Eiasin</span></h2>
                                </div>
                                <div className="">
                                    <button className='font-poppins font-medium text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'><span><CiLogout className='inline-block' /></span> Log Out</button>
                                </div>
                            </div>
                            :
                            <div className="">
                                    <button className='font-poppins font-medium text-white text-base bg-[#0A7443] py-3 px-8 rounded-md hover:border hover:bg-transparent hover:text-[#0A7443] hover:border-[#0A7443]'><span><CiLogin  className='inline-block' /></span><Link to='/login'>Log In</Link></button>
                            </div>
                    }
                </nav>
            </div>
        </div>
    )
}

export default HomeMain