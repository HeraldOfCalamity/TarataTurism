import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function SigninContent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setUserCookie = (user) => {
        
        document.cookie = 'id=' + encodeURIComponent(user.id)+';' ;
        document.cookie = 'name=' + encodeURIComponent(user.name)+';' ;
        document.cookie = 'lastname=' + encodeURIComponent(user.lastname)+';' ;
        document.cookie = 'ci=' + encodeURIComponent(user.ci)+';' ;
        document.cookie = 'country=' + encodeURIComponent(user.country)+';' ;
        document.cookie = 'email=' + encodeURIComponent(user.email)+';';
    }

    const checkUser = async () => {
        const postUser = {
            'password':password.trim(),
            'email':email
        };
        try {
            const response = await axios.post(
                'http://localhost:8000/login', 
                postUser
                );
        
            const currentUser = response.data.data;
            // console.log(currentUser);
            setUserCookie(currentUser);
            // console.log(document.cookie);
            window.location.href = '/';
        } catch (error) {
            console.error('Error signing in:', error);
            alert('User Not Found!');
        }
    };

    const handleSignin = (e) => {
        e.preventDefault();
        checkUser();
    }



    return (
        <form action='/' onSubmit={e => handleSignin(e)}>
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
