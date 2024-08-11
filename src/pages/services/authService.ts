// authService.ts

import { axiosInstance } from "./api";
import jwtDecode from "jwt-decode";

type JwtPayload = {
    sub: string;
    role: string;
    exp: number;
};

const setToken = (token: string): void => localStorage.setItem('token', token);

const getToken = (): string | null => localStorage.getItem('token');

const getUserEmail = (): string | null => {
    const token = getToken();
    if (token) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return payload.sub;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return null;
        }
    }
    return null;
}

const getUserRole = (): string | null => {
    const token = getToken();
    if (token) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return payload.role;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return null;
        }
    }
    return null;
}

const isLoggedIn = (): boolean => {
    const token = getToken();
    if (token) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            return Date.now() < payload.exp * 1000;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return false;
        }
    }
    return false;
}

const SignIn = (email: string, password: string): Promise<any> => axiosInstance.post("/auth/login", { email, password });

const SignOut = (): void => localStorage.removeItem('token');

export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };
