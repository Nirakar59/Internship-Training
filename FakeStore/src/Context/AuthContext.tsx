import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserType } from './context'

type LogInContextTYpe ={
    isLoggedIn: boolean;
    handleLogin: (token: string) => void;
    handleLogout: () => void;
    user: UserType|null;
}

export const LogInContext = createContext<LogInContextTYpe>({
    isLoggedIn: false,
    handleLogin: (token: string) => { console.log(token) },
    handleLogout: () => {
    },
    user:null
})


const AUTH_TOKEN_KEY_FOR_LOCALSTORAGE = "auth"
const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<UserType | null>(null);

    const handleLogin = (token: string) => {
        if (!token) {
            setIsLoggedIn(false)
        }
        else {
            localStorage.setItem(AUTH_TOKEN_KEY_FOR_LOCALSTORAGE, token)
            setIsLoggedIn(true)
            const userToken = token.split(".")[1];
            const decodeUser = atob(userToken);
            const decodedUser: UserType = JSON.parse(decodeUser);
            setUser(decodedUser);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem(AUTH_TOKEN_KEY_FOR_LOCALSTORAGE)
        setIsLoggedIn(false)
          navigate("/")
    }

    useEffect(() => {
        const token = localStorage.getItem(AUTH_TOKEN_KEY_FOR_LOCALSTORAGE)
        if (token) {
            handleLogin(token)
        }
    }, [])

    const value = {
        isLoggedIn,
        handleLogin,
        handleLogout,
        user
    }
    return (
        <LogInContext value={value}>{children}</LogInContext>
    )
}

export default AuthContextProvider