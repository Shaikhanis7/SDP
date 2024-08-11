import { axiosInstance } from "./api";
import jwtDecode from "jwt-decode";

const setToken = (token: string) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

const getUserEmail = (): string | null => {
    const token = getToken();
    if (token) {
        const payload: any = jwtDecode(token);
        return payload?.sub || null;
    }
    return null;
};

const getUserRole = (): string | null => {
    const token = getToken();
    if (token) {
        const payload: any = jwtDecode(token);
        return payload?.role || null;
    }
    return null;
};

const isLoggedIn = (): boolean => {
    const token = getToken();
    if (token) {
        const payload: any = jwtDecode(token);
        return Date.now() < payload.exp * 1000;
    }
    return false;
};

const SignIn = (email: string, password: string) => axiosInstance.post("/auth/login", { email, password });

const SignOut = () => localStorage.clear();

export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };
