import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function SignupContent({ toggler }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [ci, setCi] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('text-red-600 text-center');

    const handleSignup = async(e) => {
        e.preventDefault();
        if ((password.trim() === confirmedPassword.trim())) {
            setMessageClass('text-green-600 text-center');
            setMessage('Signing up successfully completed!');

            const registerUser = {
                'name':name,
                'ci':ci,
                'password':password,
                'lastname':lastname,
                'email':email,
                'origin_country_name':country
            }

            try {
                const response = await axios.post(
                    'http://localhost:8000/users', 
                    registerUser
                    );
                if (response.data.message == 1) {
                    alert(response.data.data);
                    return;
                }
                const currentUser = response.data.data;
                console.log(currentUser);
                // setUserCookie(currentUser);
                // console.log(document.cookie);
                window.location.href = '/';
            } catch (error) {
                console.error('Error signing in:', error);
            }
            return
        }

        setMessageClass('text-red-600 text-center');
        setMessage("The Passwords don't match!");


    }

    return (
        <form action='/' onSubmit={e => handleSignup(e)}>
            <h2 className='text-4xl dark:text-white font-bold text-center'>Sign Up</h2>
            {/* email */}
            <div className='flex flex-col text-gray-400 py-2'>
                {/* <label htmlFor="email_input">Email</label> */}
                <input
                    className='rounded-lg bg-gray-700 mt- p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder='Email:'
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder='Password:'
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="password"
                    onChange={e => setConfirmedPassword(e.target.value)}
                    required
                    placeholder='Confirm password:'
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="number"
                    onChange={e => setCi(e.target.value)}
                    required
                    placeholder='Ci: '
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="text"
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder='Name:'
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="text"
                    onChange={e => setLastname(e.target.value)}
                    required
                    placeholder='Lastname:'
                />
                <input
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="text"
                    onChange={e => setCountry(e.target.value)}
                    required
                    placeholder='Country:'
                />
            </div>

            {/* password */}
            {/* <div className='flex flex-col text-gray-400 py-2'>
                <label htmlFor="password_input">Password</label>

            </div> */}
            <p className={messageClass}>{message}</p>
            <button
                className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                type='submit'
            >Sign Up</button>
            <button
                className='w-full my-1 py-2 bg-teal-800 shadow-lg shadow-teal-800/50 hover:shadow-teal-800/40 text-white font-semibold rounded-lg'
                onClick={toggler}
                type='button'
            >Go sign in!</button>
        </form>
    )
}
