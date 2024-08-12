// src/services/UserService.ts
import { UserData } from './api';
import { authService } from './authService';

const getUserData = async () => {
    const email = authService.getUserEmail();
    if (email) {
        const res = await UserData(email);
        return res?.data;
    }
    return null;
};

const getUsername = async () => {
    const res = await getUserData();
    return res?.name;
};

const getUserID = async () => {
    const res = await getUserData();
    return res?.id;
};

export const User = {
    getUsername,
    getUserData,
    getUserID
};
