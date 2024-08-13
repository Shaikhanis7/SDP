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

const UpdateUserByID = (id: number, data: object): Promise<AxiosResponse> =>
    axiosInstance.put(`/users/update/${id}`, data);

const DeleteUserByID = (id: number): Promise<AxiosResponse> => axiosInstance.delete(`/users/delete/${id}`);

const getAllUsers = (): Promise<AxiosResponse> => axiosInstance.get('/users/all');

const CreateUser = (name: string, email: string, phone: string, address: string, password: string): Promise<AxiosResponse> =>
    axiosInstance.post('/users/add', { name, email, phone, address, password });

// New API functions for companies and jobs
const CreateCompany = (name: string, contactEmail: string, contactPhone: string): Promise<AxiosResponse> =>
    axiosInstance.post(`${baseURL}/user/companies`, { name, contactEmail, contactPhone });

const GetAllCompanies = (): Promise<AxiosResponse> => axiosInstance.get('/user/companies');

const UpdateCompany = (id: number, companyData: { name?: string, contactEmail?: string, contactPhone?: string }): Promise<AxiosResponse> =>
    axiosInstance.put(`/user/companies/${id}`, companyData);

const DeleteCompany = (id: number): Promise<AxiosResponse> => axiosInstance.delete(`/user/companies/${id}`);

const CreateJob = (jobData: { title: string, description: string, location: string, salary: number, jobType: string, companyId: number }): Promise<AxiosResponse> =>
    axiosInstance.post(`${baseURL}/user/jobs`, jobData);

const GetJobsByCompanyId = (companyId: number): Promise<AxiosResponse> =>
    axiosInstance.get(`/user/jobs/company/${companyId}`);

const UpdateJob = (id: number, jobData: { title?: string, description?: string, location?: string, salary?: number, jobType?: string, companyId?: number }): Promise<AxiosResponse> =>
    axiosInstance.put(`/user/jobs/${id}`, jobData);

const DeleteJob = (id: number): Promise<AxiosResponse> => axiosInstance.delete(`/user/jobs/${id}`);


export const GetAllJobs = (): Promise<AxiosResponse> => 
    axiosInstance.get('/jobs');

// Add a new application
export const AddApplication = (applicationData: {
    status: string;
    jobId: number;
    coverLetter: string;
    resumeLink: string;
    applicationDate: string;
    interviewDate?: string;
}): Promise<AxiosResponse> => 
    axiosInstance.post('/applications', applicationData);
    export { axiosInstance, SignUp, WebDatax, UserData, UpdateUserByID, getAllUsers, DeleteUserByID, CreateUser, CreateCompany, GetAllCompanies, UpdateCompany, DeleteCompany, CreateJob, GetJobsByCompanyId, UpdateJob, DeleteJob };