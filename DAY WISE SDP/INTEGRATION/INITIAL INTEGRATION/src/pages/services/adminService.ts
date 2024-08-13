// adminService.ts

import { CreateUser, DeleteUserByID, getAllUsers } from "./api";

const getAllUsersData = async (): Promise<any> => {
    const res = await getAllUsers();
    return res?.data;
}

const deleteUser = async (uid: string): Promise<any> => {
    const res = await DeleteUserByID(uid);
    return res?.data;
}

const addUser = async (name: string, email: string, role: string, phone: string, address: string, password: string): Promise<any> => {
    const res = await CreateUser(name, email, role, phone, address, password);
    return res?.data;
}

export const Admin = { getAllUsersData, deleteUser, addUser };
