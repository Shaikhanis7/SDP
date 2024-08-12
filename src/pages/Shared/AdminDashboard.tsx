import React, { useEffect, useState } from 'react';
import { UserData } from '../services/api'; // Import the UserData function from your Axios service

interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    // Add other user fields as necessary
}

const AdminDashboard: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const email = 'shaikhaniscoder07@gmail.com'; // Example email
                console.log("Fetching user data for email:", email);
                const response = await UserData(email);
                console.log("User data response:", response);
                setUser(response.data);
            } catch (err) {
                console.error('Error fetching user details:', err);
                setError('Failed to fetch user details');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>User Details</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default AdminDashboard;
