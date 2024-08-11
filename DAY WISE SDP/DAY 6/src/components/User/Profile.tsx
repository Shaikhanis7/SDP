import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        profilePicture: 'https://via.placeholder.com/150'
    });

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSave = () => {
        // Save changes (e.g., send to API)
        setEditing(false);
    };

    return (
        <div className="max-w-lg mx-auto mt-6 bg-primary shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary-foreground">Profile</h1>
            <div className="text-center mb-6">
                <img 
                    src={userData.profilePicture} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full mx-auto mb-2"
                />
                <input 
                    type="file" 
                    className="hidden" 
                    id="profilePicture"
                    name="profilePicture"
                    onChange={handleChange}
                />
                <label 
                    htmlFor="profilePicture" 
                    className="text-primary-foreground cursor-pointer"
                >
                    Change Profile Picture
                </label>
            </div>
            {editing ? (
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-primary-foreground">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-primary">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button 
                            onClick={handleSave} 
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover"
                        >
                            Save
                        </button>
                        <button 
                            onClick={handleEdit} 
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <p className="text-lg"><strong>Name:</strong> {userData.name}</p>
                        <p className="text-lg"><strong>Email:</strong> {userData.email}</p>
                        <p className="text-lg"><strong>Phone:</strong> {userData.phone}</p>
                        <p className="text-lg"><strong>Address:</strong> {userData.address}</p>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            onClick={handleEdit} 
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
