import React from 'react'
import loginImage from '../assets/login_background.jpg'

export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImage} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form action="" className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                    {/* email */}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="">Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
                    </div>

                    {/* password */}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="">Password</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        {/* <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p> */}
                        <button className='bg-emerald-500 p-2 rounded-lg text-white font-semibold shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/40'>Register</button>
                        <button className='hover:text-gray-300'>Forgot Password</button>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                </form>
            </div>
        </div>
    )
}