import { axiosInstance } from "./api";
import jwtDecode from "jwt-decode";


interface JwtPayload {
    sub: string;
    role?: string;
    exp: number;
    [key: string]: any;
}

const setToken = (token: string) => localStorage.setItem('token', token);

const getToken = (): string | null => localStorage.getItem('token');

const getUserEmail = (): string | null => {
    const token = getToken();
    if (token) {
        try {
            const payload: JwtPayload = jwtDecode(token);
            return payload.sub || null;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    return null;
};

const getUserRole = (): string | null => {
    const token = getToken();
    if (token) {
        
        try {
            const payload: JwtPayload = jwtDecode(token);
            return payload.role || null;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    return null;
};

const isLoggedIn = (): boolean => {
    const token = getToken();
    if (token) {
        try {
            const payload: JwtPayload = jwtDecode(token);
            return Date.now() < payload.exp * 1000;
        } catch (error) {
            console.error('Error decoding token:', error);
            return false;
        }
    }
    return false;
};

const SignIn = (email: string, password: string) => axiosInstance.post("/auth/login", { email, password });

const SignOut = () => {
    localStorage.clear();
    delete axiosInstance.defaults.headers.Authorization;
};

export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };
