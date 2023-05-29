import axiosClient from "../../helpers/apiClient"
import { TcreateAccount, Tlogin } from "../../helpers/types"

export const createAccount = async ({ email, phoneNumber, firstName, lastName, password }:TcreateAccount) => {
    const data = await axiosClient.post("/register", { email, phoneNumber, firstName, lastName, password })
    return data
}

export const login = async ({ email,password }: Tlogin) => {
    const data = await axiosClient.post("/login", { email, password })
    return data
}