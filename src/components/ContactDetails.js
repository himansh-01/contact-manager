import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Contactdetails = () => {
    const location = useLocation();
    const { name, email } = location.state.contact; // Accessing contact details passed via Link

    return (
        <div className="p-8">
            <div className='flex flex-col items-center gap-4 mb-4 bg-slate-500 py-8 rounded-lg'>
                <FaUser size={"20vmax"} className="bg-slate-500 p-1 text-white rounded-full" />
                <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h2 className="text-xl">{email}</h2>
                </div>
            </div>
            <Link to='/' className="bg-blue-500 text-white px-4 py-2 rounded-lg">Back</Link>    
        </div>
    );
};

export default Contactdetails;

