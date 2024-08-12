import axios, { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = 'http://localhost:7777/api';

const axiosInstance: AxiosInstance = axios.create({
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

// Existing API functions
const SignUp = (name: string, email: string, phone: string, address: string, password: string): Promise<AxiosResponse> =>
    axios.post(`${baseURL}/auth/register`, { name, email, phone, address, password });

const WebDatax = (): Promise<AxiosResponse> => axios.get(`${baseURL}/web/sitex`);

const UserData = (email: string): Promise<AxiosResponse> => axiosInstance.get(`/users/email/${email}`);

const UpdateUserByID = (id: string, data: object): Promise<AxiosResponse> =>
    axiosInstance.put(`/users/update/${id}`, data);

const DeleteUserByID = (id: string): Promise<AxiosResponse> => axiosInstance.delete(`/users/delete/${id}`);

const getAllUsers = (): Promise<AxiosResponse> => axiosInstance.get('/users/all');

const CreateUser = (name: string, email: string, role: string, phone: string, address: string, password: string): Promise<AxiosResponse> =>
    axiosInstance.post('/user/add', { name, email, phone, role, address, password });

// New API functions for companies and jobs
const CreateCompany = (name: string, contactEmail: string, contactPhone: string): Promise<AxiosResponse> =>
    axiosInstance.post(`${baseURL}/user/companies`, { name, contactEmail, contactPhone });

const GetAllCompanies = (): Promise<AxiosResponse> => axiosInstance.get('/user/companies');

const CreateJob = (jobData: { title: string, description: string, location: string, salary: number, jobType: string, companyId: number }): Promise<AxiosResponse> =>
    axiosInstance.post(`${baseURL}/user/jobs`, jobData);

export { axiosInstance, SignUp, WebDatax, UserData, UpdateUserByID, getAllUsers, DeleteUserByID, CreateUser, CreateCompany, GetAllCompanies, CreateJob };
