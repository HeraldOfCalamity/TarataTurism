import React from 'react'
import { useState } from 'react'
import { user } from '../user'
import axios from 'axios'

export default function SigninContent({setCurrentUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = async () => {
        const postUser = {
            'password':password,
            'email':email
        };
        try {
            const response = await axios.post(
                'http://localhost:8000/login', 
                postUser
                );
            if (response.data.message == 1) {
                alert(response.data.data);
                return;
            }
            
            setCurrentUser(response.data.data);

        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignin = (e) => {
        // e.preventDefault();
        checkUser();
    }



    return (
        <form action='/home' onSubmit={e => handleSignin(e)}>
            <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
            {/* email */}
            <div className='flex flex-col text-gray-400 py-2'>
                <label htmlFor="email_input">Email</label>
                <input
                    id='email_input'
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* password */}
            <div className='flex flex-col text-gray-400 py-2'>
                <label htmlFor="password_input">Password</label>
                <input
                    id='password_input'
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>

            <button
                className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                type='submit'
            >Sign In</button>
        </form>
    )
}
