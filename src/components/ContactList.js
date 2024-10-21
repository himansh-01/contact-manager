import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
const Contactlist = (props) => {

    const deletecontact = (id) => {
        props.getcontactid(id)
    }

    return (
        <div className='mt-20'>
            <h1 className="text-2xl font-bold flex justify-evenly">Contact List <Link to="/add" className="bg-blue-500 p-1 hover:bg-blue-700 text-white font-bold  rounded">Add Contact
            </Link></h1>
            <div className="pt-10">
                <div className="mt-10">
                    {
                        props.contacts.map((contact, index) => (
                            <ContactCard contact={contact} key={index} clickid={deletecontact} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contactlist;
