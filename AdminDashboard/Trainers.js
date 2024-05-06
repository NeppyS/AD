import React, { useState } from 'react';
import './Trainers.css';

function Trainers() {
    const [trainers, setTrainers] = useState([]); 

    const addTrainer = (formData) => {
        const newTrainer = {
            id: trainers.length + 1,
            ...formData
        };
        setTrainers([...trainers, newTrainer]);
    };

    return (
        <div className="container">
            <h1>Trainers Dashboard</h1>
            <button className="add-button">Add Trainer</button>
            <table>
                
            </table>
        </div>
    );
}

export default Trainers;
