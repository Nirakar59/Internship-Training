import { useEffect, useState } from "react";
import { UserContext, UserType } from "./context";


const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    function handleUserAuth(token: string) {
        if (token) {
            try {
                const userToken = token.split(".")[1];
                const decodeUser = atob(userToken);
                const decodedUser: UserType = JSON.parse(decodeUser);
                setUser(decodedUser);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }
    function handleLogOut(){
        localStorage.removeItem("auth")
        setUser(null)
    }
    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) handleUserAuth(token)
    }, []);

    return (
        <UserContext value={{user, handleLogOut}}>
            {children}
        </UserContext>
    );
};

export default UserProvider;
