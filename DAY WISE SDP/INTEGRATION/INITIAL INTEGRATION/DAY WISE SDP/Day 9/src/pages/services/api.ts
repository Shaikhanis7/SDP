
import axios from 'axios';


const baseURL = 'http://localhost:7777/api';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const SignUp = (name: string, email: string, phone: string, address: string, password: string) =>
    axiosInstance.post('/auth/register', { name, email, phone, address, password });

const SignIn = (email: string, password: string) =>
    axiosInstance.post('/auth/login', { email, password });

const SignOut = () => axiosInstance.post('/auth/logout');


const WebData = () => axiosInstance.get('/web/site');

const UserData = (email: string) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id: string, data: object) => axiosInstance.put(`/users/update/${id}`, data);
const DeleteUserByID = (id: string) => axiosInstance.delete(`/users/delete/${id}`);
const getAllUsers = () => axiosInstance.get('/users/all');

const getJobPostings = () => axiosInstance.get('/jobs');  
const getJobPostingByID = (id: string) => axiosInstance.get(`/jobs/${id}`);
const createJobPosting = (data: object) => axiosInstance.post('/jobs', data);
const updateJobPostingByID = (id: string, data: object) => axiosInstance.put(`/jobs/${id}`, data);
const deleteJobPostingByID = (id: string) => axiosInstance.delete(`/jobs/${id}`);

export {
    axiosInstance,
    SignUp,
    SignIn,
    SignOut,
    WebData,
    UserData,
    UpdateUserByID,
    DeleteUserByID,
    getAllUsers,
    getJobPostings,
    getJobPostingByID,
    createJobPosting,
    updateJobPostingByID,
    deleteJobPostingByID,
};
