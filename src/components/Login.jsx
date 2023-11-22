import React, { useState } from 'react'
import loginImage from '../assets/login_background.jpg'
import SigninContent from './SigninContent'
import SignupContent from './SignupContent'
import { user } from '../user';

export default function Login({setCurrentUser}) {
    const [signupActive, setSignupActive] = useState(false);

    const handleForgotPassword = () => {
        console.log('Forgot password: ' + user);
    }

    const toggleSignUp = () => {
        // console.log('toggling signup')
        setSignupActive(!signupActive)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImage} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <div className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    {signupActive ? <SignupContent toggler={toggleSignUp} /> : <SigninContent setCurrentUser={setCurrentUser}/>}
                    {!signupActive &&
                        <div className='flex justify-between text-gray-400 py-2'>
                            <button
                                className='bg-emerald-500 p-2 rounded-lg text-white font-semibold shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/40'
                                onClick={toggleSignUp}
                            >Sign up</button>
                            <button
                                className='hover:text-gray-300'
                                onClick={handleForgotPassword}
                            >Forgot Password</button>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}