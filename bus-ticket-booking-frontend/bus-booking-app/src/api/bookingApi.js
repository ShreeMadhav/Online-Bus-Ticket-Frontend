const BASE_URL = 'http://localhost:8080/api/bookings';  // Ensure BASE_URL is defined

export const fetchBookingHistoryByEmail = async (email) => {
    try {
        const response = await fetch(`${BASE_URL}/history/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching booking history: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to create a new booking
export const createBooking = async (bookingData, token) => {
    try {
        const response = await fetch(`${BASE_URL}/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        if (!response.ok) {
            throw new Error('Booking creation failed');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};