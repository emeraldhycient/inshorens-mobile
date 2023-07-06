import axiosClient from "../../helpers/apiClient"
import { TplolicyById } from "../../helpers/types"


export const getPolicies = async () => {
    const data = await axiosClient.get("/policy")
    return data
}
export const getPolicyById = async ({policyId}:TplolicyById) => {
    const data = await axiosClient.get(`/policy/${policyId}`)
    return data
}