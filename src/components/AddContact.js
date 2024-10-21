import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addcontact = ({ handeler }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
            alert('All the fields are mandatory!');
            return;
        }
        handeler({ name, email });
        setName('');
        setEmail('');
        navigate('/');
    };

    return (
        <div className="mt-20">
            <h1 className="text-2xl font-bold">Add Contact</h1>
            <form className="flex flex-col gap-4" onSubmit={add}>
                <div className="flex flex-col lg:w-1/2 w-[90%]">
                    <label className="text-lg">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="border-2"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col lg:w-1/2 w-[90%]">
                    <label className="text-lg">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        className="border-2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="">
                    <button className="bg-blue-500 text-white px-4 rounded-lg" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Addcontact;
