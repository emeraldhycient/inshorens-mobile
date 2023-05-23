import axiosClient from "../../helpers/apiClient"
import { TcreateAccount, Tlogin } from "../../helpers/types"

export const createAccount = async ({ email, phoneNumber, firstName, lastName, password }:TcreateAccount) => {
    await axiosClient.post("/register", { email, phoneNumber, firstName, lastName, password })
}

export const login = async ({ email,password }: Tlogin) => {
    await axiosClient.post("/login", { email,password })
}