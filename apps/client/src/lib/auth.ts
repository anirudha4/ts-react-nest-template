import { UserType } from "@contexts/auth";
import axios, { AxiosResponse } from "axios";

export const login = async (credentials: Omit<UserType, "name">): Promise<AxiosResponse> => {
    return await axios.post('/api/auth/login', credentials);
}
export const signup = async (credentials: UserType): Promise<AxiosResponse> => {
    return await axios.post('/api/auth/signup', credentials);
}