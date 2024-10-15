import React, { useState, useEffect } from 'react';
import './BookingForm.css'; // Importing a specific CSS file for styling

const BookingForm = () => {
    const [buses, setBuses] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [busId, setBusId] = useState('');

    useEffect(() => {
        // Sample data; replace with your API call later
        const sampleBuses = [
          { id: 1, number: 'Bus Volvo', route: 'Chennai to Bangalore'},
            { id: 2, number: 'Bus Scania', route: 'Bangalore to Coimbatore' },
            { id: 3, number: 'Bus Parveen', route: 'Chennai to City Coimbatore' },
        ];
        setBuses(sampleBuses);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${name} on Bus ID: ${busId}`);
        // Here, you would send the data to your backend API
        setName('');
        setEmail('');
        setBusId('');
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book Your Ticket</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Select Bus:
                <select value={busId} onChange={(e) => setBusId(e.target.value)} required>
                    <option value="">--Select a Bus--</option>
                    {buses.map(bus => (
                        <option key={bus.id} value={bus.id}>
                            {bus.number} - {bus.route}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;