// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import corresponding styles

const Navbar = () => {
    const isLoggedIn = Boolean(localStorage.getItem('token')); // Example check

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {isLoggedIn && (
                <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/booking-history">Booking History</Link>
                    <Link to="/buses">Available Buses</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
