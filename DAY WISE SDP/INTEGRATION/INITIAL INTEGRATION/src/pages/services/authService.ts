import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {jwtDecode} from 'jwt-decode';

// Define the base URL for the API
const baseURL = 'http://localhost:7777/api';

// Define the JWT payload type
type JwtPayload = {
    sub: string; // User email or ID
    role: string;
    exp: number; // Expiry time in seconds
};

// Function to store the token in localStorage
const setToken = (token: string): void => {
    if (token) {
        localStorage.setItem('token', token);
        console.log("Token stored successfully:", token);
    } else {
        console.error("Attempted to set an undefined token.");
    }
};

// Function to get the token from localStorage
const getToken = (): string | null => {
    return localStorage.getItem('token');
};

// Function to check if the token is valid (basic check for JWT structure)
const isValidToken = (token: string): boolean => {
    return token.split('.').length === 3;
};

// Function to get the user's email from the token
const getUserEmail = (): string | null => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return payload.sub;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return null;
};

// Function to get the user's role from the token
const getUserRole = (): string | null => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return payload.role;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return null;
};

// Function to check if the user is logged in (valid token and not expired)
const isLoggedIn = (): boolean => {
    const token = getToken();
    if (token && isValidToken(token)) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return Date.now() < payload.exp * 1000;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return false;
};

// Create an authenticated Axios instance
const createAxiosInstance = (): AxiosInstance => {
    const token = getToken();
    return axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    });
};

// Function to get user details by ID
const getUserDetails = async (userId: string): Promise<AxiosResponse> => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.get(`/users/${userId}`);
        return response;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

// Function to handle user sign-in and store the token
const SignIn = async (email: string, password: string): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, { email, password });
        console.log("Login response:", response.data);

        const accessToken = response.data;
        if (accessToken) {
            setToken(accessToken);
        } else {
            console.error("Token is missing in the response.");
        }

        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Function to handle user sign-out (clear localStorage)
const SignOut = (): void => {
    localStorage.clear();
};

export const authService = {
    getToken,
    setToken,
    getUserEmail,
    getUserRole,
    isLoggedIn,
    SignIn,
    SignOut,
    getUserDetails,
};
