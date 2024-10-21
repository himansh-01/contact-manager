import React from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    const handleDelete = () => {
        props.clickid(id);
    };

    return (
        <>
            <div className='flex justify-between items-center gap-4 border-b-2 mb-4'>
                <div className='flex items-center'>
                    <div className="rounded-full bg-slate-500 p-1 text-white">
                        <FaUser size={"3vmax"} />
                    </div>
                    <div className='pl-4'>
                        <Link 
                            to={`/contact/${id}`}  // Corrected use of template literals
                            state={{ contact: props.contact }}
                            className="text-blue-500 font-semibold">
                            <h1 className="font-semibold text-lg">{name}</h1>
                            <h1>{email}</h1>
                        </Link>
                    </div>
                </div>
                <RiDeleteBin5Fill
                    size={"3vmax"}
                    className='text-red-600 cursor-pointer'
                    onClick={handleDelete}
                />
            </div>
        </>
    );
};

export default ContactCard;