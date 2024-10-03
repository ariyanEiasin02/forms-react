import React, { useState } from 'react'
import { MdOutlineEmail, MdErrorOutline } from "react-icons/md";
import { CiUser, CiLock, CiUnlock } from "react-icons/ci";
import { Link } from 'react-router-dom';

const RegisterMain = () => {
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState()
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState()
    const [lock, setLock] = useState(false)

    const handleuserName = (e) => {
        setUserName(e.target.value)
        setUserNameError("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError("")
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")
    }
    const hanleLock = () => {
        setLock(!lock)
    }
    const handleSubmit = () => {
        if (!userName) {
            setUserNameError("Required")
        }
        if (!email) {
            setEmailError("Required")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("Enter valid email");
            }
        }

        if (!password) {
            setPasswordError("Required")
        }else {
            if (!/^(?=.*[0-9]).{8,16}$/.test(password)) {
              setPasswordError("Please Enter At Least 8 Characters")
            }
          }
    }
    return (
        <>
            <section className='md:h-screen bg-white'>
                <div className="text-center py-12">
                    <div className="bg-white mt-[60px] md:w-[500px] py-8 mx-auto shadow-2xl rounded-xl px-6">
                        <div className="">
                            <h1 className='font-poppins font-semibold text-2xl text-[#343a40]'>Register</h1>
                            <p className='font-poppins font-light text-base mt-2 text-[#7a7f9a]'>Get your Forms Spark account now.</p>
                        </div>
                        <div className="mt-2 relative">
                            <div className="text-left py-2">
                                <label className='font-poppins font-medium text-xl text-[#343a40]'>Username</label>
                            </div>
                            <div className="flex items-center">
                                <i className='bg-[#F8F9FA] font-public font-normal text-base text-[#343a40] rounded-l-xl p-[16.5px] border'><CiUser /></i>
                                <input onChange={handleuserName} className='border font-poppins font-normal text-base text-[#000] rounded-r-xl w-full py-3 px-3 outline-none' type="email" placeholder='Enter Username' />
                            </div>
                            <div className="">
                                <p className='font-public text-left font-medium text-base text-red-500 mt-2'>{userNameError}</p>
                                {
                                    userNameError && <i className="text-red-500 text-xl absolute top-[60px] block right-[10px]"><MdErrorOutline className='' /></i>
                                }
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <div className="text-left py-2">
                                <label className='font-poppins font-medium text-xl text-[#343a40]'>Email</label>
                            </div>
                            <div className="flex items-center">
                                <i className='bg-[#F8F9FA] font-public font-normal text-base text-[#343a40] rounded-l-xl p-[16.5px] border'><MdOutlineEmail /></i>
                                <input onChange={handleEmail} className='border font-poppins font-normal text-base text-[#000] rounded-r-xl w-full py-3 px-3 outline-none' type="email" placeholder='Enter Email' />
                            </div>
                            <div className="">
                                <p className='font-poppins text-left font-medium text-base text-red-500 mt-2'>{emailError}</p>
                                {
                                    emailError && <i className="text-red-500 text-xl absolute top-[60px] block right-[10px]"><MdErrorOutline className='' /></i>
                                }
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <div className="text-left py-2">
                                <label className='font-poppins font-medium text-xl text-[#343a40]'>Password</label>
                            </div>
                            <div className="flex items-center">
                                {
                                    lock ? <i onClick={hanleLock} className='bg-[#F8F9FA] font-poppins font-normal text-base text-[#343a40] rounded-l-xl p-[16.5px] border'><CiUnlock /></i> : <i onClick={hanleLock} className='bg-[#F8F9FA] font-poppins font-normal text-base text-[#343a40] rounded-l-xl p-[16.5px] border'><CiLock /></i>
                                }
                                <input onChange={handlepassword} className='border font-poppins font-normal text-base text-[#000] rounded-r-xl w-full py-3 px-3 outline-none' type="password" placeholder='Enter Password' />
                            </div>
                            <div className="">
                                <p className='font-poppins text-left font-medium text-base text-red-500 mt-2'>{passwordError}</p>
                                {
                                    passwordError && <i className="text-red-500 text-xl absolute top-[60px] block right-[10px]"><MdErrorOutline className='' /></i>
                                }
                            </div>
                        </div>

                        <div onClick={handleSubmit} className="mt-[30px] font-poppins font-medium text-xl text-white bg-[#0A7443] py-3 rounded-xl w-full cursor-pointer">Register</div>

                        <div className="mt-[20px]">
                            <p className='font-poppins font-normal text-base mt-2 text-[#7a7f9a]'>Already have an account ? <Link to="/login" className='text-[#0A7443] text-semibold'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterMain