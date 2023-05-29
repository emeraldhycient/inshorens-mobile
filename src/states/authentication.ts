import { create } from 'zustand'

const initialState = {
    token: null,
    isAuthenticated: false,
    user: null
}

const useAuthenticationState = create((set) => ({
    authentication: initialState,
    setToken: (token:string) =>
        set((state:any) => ({
            authentication: {
                ...state.authentication,
                token,
            }
        })),
    unsetToken: () =>
        set((state:any) => ({
            authentication: {
                ...state.authentication,
                token: null,
                isAuthenticated: false
            }
        })),
    setUser: (user:any) =>
        set((state:any) => ({
            authentication: {
                ...state.authentication,
                token: user.token,
                user: user
            }
        })),
    unsetUser: (user:any) =>
        set((state:any) => ({
            authentication: {
                ...state.authentication,
                token: null,
                isAuthenticated: false,
                user: null
            }
        })),
    setIsAuthenticated: (isAuthenticated:boolean) =>
        set((state:any) => ({
            authentication: {
                ...state.authentication,
                isAuthenticated
            }

        })),
}))

export default useAuthenticationState
