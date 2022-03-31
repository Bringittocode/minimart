import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loader_state } from "../../utility/store/loader/action";
import { FaCreditCard, FaLock, FaStore } from 'react-icons/fa';
import {IoFlash} from 'react-icons/io5';
import Newlyadded from "./newlyadded";
import Recentlybrought from './recentlybrought';



const Home = ()=>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loader_state(false));
    }, [])
    
    return(
        <div className="w-full pt-2">
            <div className="card mx-auto px-4 p-3">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 justify-items-center">
                    <div className='flex flex-col border-warning-content rounded-md bg-red-500 justify-center w-full items-center text-white p-2 sm:p-5'>
                        <FaLock className='text-[18px] sm:text-[25px] '/>
                        <p className='font-extrabold font-mono text-center'>Scam free</p>
                    </div>
                    <div className='flex flex-col border-warning-content rounded-md bg-amber-500 justify-center w-full items-center text-white p-2 sm:p-5'>
                        <IoFlash className='text-[18px] sm:text-[25px]'/>
                        <p className='font-extrabold font-mono text-center'>Fastest delivery</p>
                    </div>
                    <div className='flex flex-col border-warning-content rounded-md bg-emerald-500 justify-center w-full items-center text-white p-2 sm:p-5'>
                        <FaCreditCard className='text-[18px] sm:text-[25px]'/>
                        <p className='font-extrabold font-mono text-center'>3D payment</p>
                    </div>
                    <div className='flex flex-col border-warning-content rounded-md bg-green-500 justify-center w-full items-center text-white p-2 sm:p-5'>
                        <FaStore className='text-[18px] sm:text-[25px] '/>
                        <p className='font-extrabold font-mono text-center'>New products</p>
                    </div>
                </div>
            </div>

            <Newlyadded/>
            <Recentlybrought/>
        </div>
    )
}

export default Home;