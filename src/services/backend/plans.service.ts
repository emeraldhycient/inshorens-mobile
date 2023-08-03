import axiosClient from "../../helpers/apiClient"

export const getPlans = async () => {
    const data = await axiosClient.get("/plan")
    return data
}