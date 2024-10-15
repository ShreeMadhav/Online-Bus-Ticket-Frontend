import React, { useEffect, useState } from 'react';
import { fetchBookingHistoryByEmail } from '../api/bookingApi';
import './BookingForm.css';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
      const email = localStorage.getItem('userEmail'); // Fetch user email from local storage

      if (!email) {
          setError('User email is not defined. Please log in again.'); // Handle undefined email
          return;
      }

      const getBookingHistory = async () => {
          try {
              const data = await fetchBookingHistoryByEmail(email);
              setBookings(data);
          } catch (error) {
              setError('Failed to fetch booking history: ' + error.message);
          }
      };

      getBookingHistory();
  }, []);

  if (error) {
      return <div>{error}</div>; // Display error message if needed
  }

  return (
      <div>
          <h2>Booking History</h2>
          {bookings.length > 0 ? (
              <ul>
                  {bookings.map((booking) => (
                      <li key={booking.id}>{booking.details}</li>
                  ))}
              </ul>
          ) : (
              <p>No bookings found.</p>
          )}
      </div>
  );
};

export default BookingHistory;