// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Read error response text
            throw new Error(errorMessage || 'Failed to register');
        }

        const data = await response.json();
        return data; // Return the registered user data if needed
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Propagate the error to be handled in the calling component
    }
};
export async function loginUser(loginData) {
    const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    return await response.json();
}
 
