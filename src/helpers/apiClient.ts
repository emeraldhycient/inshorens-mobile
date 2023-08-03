import axios from 'axios'
import globalBaseUrl from './globalBaseApiUrl'
import useAuthenticationState from '../states/authentication'
import { getToken } from '../states/storage/token'
// import jwt_decode from "jwt-decode";

const axiosClient = axios.create({
    baseURL: globalBaseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


// const refreshTokens = async () => {
//     const token = await getToken()
//     const refresh = await getStore('refreshToken');
//     const axios2 = axios.create({
//         baseURL: globalBaseUrl,
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         }
//     });
//     try {
//         const res = await axios2.post("/auth/refresh", { refreshToken: refresh });
//         return res.data;
//     } catch (err: any) {
//         throw new Error(err);
//     }
// }

axiosClient.interceptors.request.use(
    async (config) => {
        const token = await getToken()
        if (token) {

            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosClient