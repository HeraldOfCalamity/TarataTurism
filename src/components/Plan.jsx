import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import UserPlan from "./UserPlan"
import axios from "axios"
import Modal from "./Modal"
import PlaceImage from "./PlaceImage"
import { readCookieByKey } from "../user"




export default function Plan() {
    const [plans, setPlans] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [turistSpots, setTouristSpots] = useState([]);
    const [message, setMessage] = useState('');
    const [searchPlan, setSearchPlan] = useState(0);

    const GridPlan = ({ pName, pCost, pDesc, pId }) => {
        return (
            <div className="bg-emerald-400 flex flex-col border-t-2 mx-4 overflow-y-auto max-h-72 px-2">
                <button onClick={() => requestTouristspots(pId)}>
                    <UserPlan plan_name={pName} cost={pCost} desc={pDesc} />
                </button>
            </div>
        )
    }

    const TouristSpot = ({ name, lat, lon }) => {
        return (
            <div className="bg-slate-600 rounded flex justify-center items-center mb-5 p-2">
                <h2 className="mx-3 text-xl text-gray-200 bg-slate-500 rounded p-1 text-center">
                    {name}
                </h2>
                <PlaceImage latitude={lat} longitude={lon} />
            </div>
        )
    }

    const registerPlan = async (id) => {
        console.log('userid>',readCookieByKey('id'));
        console.log('planid>', id);
        
        try {
            const response = await axios.post(
                'http://localhost:8000/aux/regplan',
                {'userId':readCookieByKey('id'), 'planId':id}
            );
            if (response.data.message == 1) {
                alert(response.data.data);
                return;
            }
            setMessage(response.data);
            // window.location.href = '/';
        } catch (error) {
            setMessage('Something went wrong registering plan!');
            console.error('Error getting plans:', error);
        }
    }

    const requestTouristspots = async (id) => {
        setSearchPlan(id);
        try {
            const response = await axios.get(
                'http://localhost:8000/plan/' + id
            );
            if (response.data.message == 1) {
                alert(response.data.data);
                return;
            }
            console.log(response.data);
            setTouristSpots(response.data);
            // window.location.href = '/';
        } catch (error) {
            console.error('Error getting plans:', error);
        }
    }


    const openModal = () => {

        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const get_plans = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/plan'
                );
                if (response.data.message == 1) {
                    alert(response.data.data);
                    return;
                }
                console.log(response.data);
                setPlans(response.data);
                // window.location.href = '/';
            } catch (error) {
                console.error('Error getting plans:', error);
            }
        }
        get_plans();
    }, [])

    return (
        <div className="bg-emerald-500 grid grid-cols-1 sm:grid-cols-2 w-full">
            <Navbar />
            <div className="mt-16">
                <div className="bg-emerald-600 mx-4 rounded-t">
                    <h3 className="text-xl text-center text-white"> Plans</h3>
                </div>
                {
                    plans.map((p, i) =>
                        <GridPlan pId={p.id} pName={p.name} pCost={p.cost} pDesc={p.description} key={p.id} />)
                }
            </div>
            <div className="mt-16">
                <div className="bg-emerald-600 mx-4 rounded-t">
                    <h3 className="text-xl text-center text-white"> Turistic places in plan </h3>
                </div>
                <div className="bg-emerald-400 flex flex-col border-t-2 mx-4 max-h-screen overflow-y-auto px-2">
                    
                    {
                        turistSpots.map((ts, i) =>
                            <TouristSpot
                                name={ts.name}
                                lat={ts.latitude}
                                lon={ts.longitude}
                                key={i}
                            />)
                    }
                    

                </div>

                <div className="m-4">
                <button 
                    onClick={() => registerPlan(searchPlan)}
                    className="rouded bg-green-600 hover:bg-green-700 text-white text-xl w-full p-2 rounded">
                    Register Plan
                </button>
                <p>
                    {message}
                </p>
                </div>
            </div>

            {isModalOpen && (
                <Modal
                    title="Modal Title"
                    content={
                        <PlaceImage longitude={-66} latitude={-17} />
                    }
                    onClose={closeModal}
                />
            )}
        </div>
    )
}