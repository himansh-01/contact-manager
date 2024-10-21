import React, { useEffect, useState } from 'react';
import Header from './Header';
import Addcontact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetails from './ContactDetails';


const App = () => {
    const LOCAL_KEY = "contacts";

    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem(LOCAL_KEY);
        return savedContacts ? JSON.parse(savedContacts) : [];
    });

    const handeler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removecontact = (id) => {
        const newcontact = contacts.filter(contact => contact.id !== id);
        setContacts(newcontact);
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className='px-16 gap-4 flex flex-col'>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<ContactList contacts={contacts} getcontactid={removecontact} />}
                    />
                    <Route
                        path='/add'
                        element={<Addcontact handeler={handeler} />}
                    />
                     <Route path="/contact/:id" Component={ContactDetails}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
