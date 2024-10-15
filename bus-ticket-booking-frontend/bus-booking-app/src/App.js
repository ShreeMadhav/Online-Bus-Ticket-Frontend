import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BusList from './components/BusList';
import BookingForm from './components/BookingForm';

import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import BookingHistory from './components/BookingHistory';
import './App.css';

function App() {
    return (
        <Router>
            <header>
                <h1>Online Bus Ticket Booking</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/booking">Book a Ticket</Link>
                    <Link to="/register">UserRegistration</Link>
                    <Link to="/login">UserLogin</Link>
                    <Link to="/bookinghistory">BookingHistory</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<BusList />} />
                    <Route path="/booking" element={<BookingForm />} />
                    
                    <Route path="/register" element= {<UserRegistration />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/bookinghistory" element={<BookingHistory />} />
                </Routes>
            </main>
            <footer>
                <p>&copy; 2024 Online Bus Ticket Booking</p>
            </footer>
        </Router>
    );
}

export default App;
