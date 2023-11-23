import Navbar from "./Navbar"
import { readCookieByKey } from "../user"
import { useEffect, useState } from "react";
import { deleteUserCookie } from "../user";
import UserPlan from "./UserPlan";
import axios from "axios";

export default function Profile() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [ci, setCi] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('text-red-600 text-center');
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const get_plans = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/users/plans/' + readCookieByKey('ci')
                    );
                if (response.data.message == 1) {
                    alert(response.data.data);
                    return;
                }
                console.log(response.data.data);
                setPlans(response.data.data);
                // window.location.href = '/';
            } catch (error) {
                console.error('Error getting plans:', error);
            }
        }
        get_plans();
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        if ((password.trim() === confirmedPassword.trim())) {
            // console.log('everything ok')
            const updateUser = {
                'name': name,
                'ci': ci,
                'password': password,
                'lastname': lastname,
                'email': email,
                'origin_country_name': country
            }

            // try {
            //     const response = await axios.put(
            //         'http://localhost:8000/users',
            //         registerUser
            //     );
            //     if (response.data.message == 1) {
            //         alert(response.data.data);
            //         return;
            //     }
            //     const currentUser = response.data.data;
            //     // console.log(currentUser);
            //     // setUserCookie(currentUser);
            //     // console.log(document.cookie);
            //     // window.location.href = '/';
            // } catch (error) {
            //     console.error('Error signing in:', error);
            // }
            setMessageClass('text-green-600 text-center');
            setMessage('Updating successfully completed!');
            return
        }
        setMessageClass('text-red-600 text-center');
        setMessage("The Passwords don't match!");
    }

    const handleLogOut = () => {
        deleteUserCookie();
        window.location.href = '/';
    }

    const handleDeleteAccount = async () => {
        try {
            const response = await axios.delete(
                'http://localhost:8000/users/' + readCookieByKey('ci')
                );
            if (response.data.message == 1) {
                alert(response.data.data);
                return;
            }
            // alert(response.data.data)
            // const currentUser = response.data.data;
            // console.log(currentUser);
            // setUserCookie(currentUser);
            // console.log(document.cookie);
            alert(response.data.data);
            deleteUserCookie();
            window.location.href = '/';
        } catch (error) {
            console.error('Error deleting account:', error);
        }
        console.log('delete account');
    }

    return (
        <>
            <div className="bg-emerald-500 grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <Navbar />
                <div className="bg-emerald-400 flex flex-col justify-evenly mt-16 border-t-2">
                    <div className="bg-red-70 text-gray-100 font-extrabold flex justify-center my-5">
                        <h1>{readCookieByKey('name')}</h1>
                    </div>
                    <form className="p-10" action="" onSubmit={e => handleUpdate(e)}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setEmail(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email: {readCookieByKey('email')}</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setName(e.target.value)} type="text" name="floating-name" id="floating-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating-name" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Name: {readCookieByKey('name')}</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setLastname(e.target.value)} type="text" name="floating_lastname" id="floating_lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_lastname" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Lastname {readCookieByKey('lastname')}</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setCi(e.target.value)} type="number" name="floating_ci" id="floating_ci" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_ci" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Ci {readCookieByKey('ci')}</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setCountry(e.target.value)} type="text" name="floating_country" id="floating_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_country" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Country {readCookieByKey('country')}</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setPassword(e.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={e => setConfirmedPassword(e.target.value)} type="password" name="floating_confirmed_password" id="floating_confirmed_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_confirmed_password" className="peer-focus:font-medium absolute text-sm text-green-900 dark:text-green-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Confirm Password</label>
                        </div>
                        <div className="mt-5 mx-10">
                            <p className={messageClass}>{message}</p>
                            <div className="flex justify-between">
                                <button className="mx-2 px-5 p-2 rounded bg-emerald-600 hover:bg-emerald-700" type="submit">
                                    Update</button>
                                <button onClick={handleDeleteAccount} className="mx-2 px-5 p-2 rounded bg-red-600 hover:bg-red-700" type="button">
                                    Delete Account</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-emerald-500 flex flex-col mt-16">
                    <div className="border-t-2">
                        <h3 className="text-gray-100 text-center">Plan History</h3>
                        <div className="px-5 mt-5 overflow-y-auto max-h-[500px]">
                            {plans.map((plan, i) => <UserPlan plan_name={plan.planname} cost={plan.plancost} desc={plan.description} key={i}/>)}
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="bg-amber-600 hover:bg-amber-700 rounded p-2 w-full m-5" type="button">
                        Log Out</button>
                </div>
            </div>
        </>






    )
}