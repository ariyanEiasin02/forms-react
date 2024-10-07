import React, { useState } from 'react'
import { MdOutlineEmail, MdErrorOutline } from "react-icons/md";
import { CiUser, CiLock, CiUnlock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginMain = () => {
    const auth = getAuth();
    const [email, setEmail] = useState();
    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Forgot Password Successfully!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <>
            <section className='md:h-screen bg-white'>
                <ToastContainer position="top-center" theme="dark" closeOnClick />
                <div className="text-center py-48">
                    <div className="bg-white mt-[80px] md:w-[500px] py-8 mx-auto shadow-2xl rounded-xl px-6">
                        <div className="">
                            <h1 className='font-poppins font-semibold text-2xl text-[#343a40]'>Forgot Password</h1>
                        </div>
                        <div className="mt-2 relative">
                            <div className="text-left py-2">
                                <label className='font-poppins font-medium text-xl text-[#343a40]'>Email</label>
                            </div>
                            <div className="flex items-center">
                                <i className='bg-[#F8F9FA] font-public font-normal text-base text-[#343a40] rounded-l-xl p-[16.5px] border'><MdOutlineEmail /></i>
                                <input onChange={(e) => setEmail(e.target.value)} className='border font-poppins font-normal text-base text-[#000] rounded-r-xl w-full py-3 px-3 outline-none' type="email" placeholder='Enter Email' />
                            </div>
                            {/* <div className="">
                                <p className='font-poppins text-left font-medium text-base text-red-500 mt-2'>{emailError}</p>
                                {
                                    emailError && <i className="text-red-500 text-xl absolute top-[60px] block right-[10px]"><MdErrorOutline className='' /></i>
                                }
                            </div> */}
                        </div>
                        <div className="flex gap-x-8">
                            <button className="mt-[30px] font-poppins font-medium text-xl text-white bg-[#740a24] py-3 rounded-xl w-full cursor-pointer"><Link to="/login">Back To Login</Link></button>
                            <button onClick={handleReset} className="mt-[30px] font-poppins font-medium text-xl text-white bg-[#0A7443] py-3 rounded-xl w-full cursor-pointer">Reset</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginMain