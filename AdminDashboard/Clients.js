import React, { useState } from 'react';
import './Clients.css';

function Clients() {
    const [clients, setClients] = useState([]); 

    const addClient = (formData) => {
        const newClient = {
            id: clients.length + 1,
            ...formData
        };
        setClients([...clients, newClient]);
    };

    return (
        <div className="container">
            <h1>Clients Dashboard</h1>
            <button className="add-button">Add Client</button>
            <table>
                
            </table>
        </div>
    );
}

export default Clients;
