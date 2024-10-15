import React, { useState, useEffect } from 'react';
import './BusList.css'; // Importing a specific CSS file for styling

const BusList = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        // Sample data; replace with your API call later
        const sampleBuses = [
            { id: 1, number: 'Bus Volvo', route: 'Chennai to Bangalore', departureTime: '2024-10-14 08:00' },
            { id: 2, number: 'Bus Scania', route: 'Bangalore to Coimbatore', departureTime: '2024-10-14 10:00' },
            { id: 3, number: 'Bus Parveen', route: 'Chennai to City Coimbatore', departureTime: '2024-10-14 12:00' },
        ];
        setBuses(sampleBuses);
    }, []);

    return (
        <section className="bus-list">
            <h2>Available Buses</h2>
            <div className="bus-cards">
                {buses.map(bus => (
                    <div key={bus.id} className="bus-card">
                        <h3>{bus.number}</h3>
                        <p>{bus.route}</p>
                        <p>Departure: {bus.departureTime}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusList;
