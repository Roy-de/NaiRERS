import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(undefined);
export const AuthProvider = ({children}) =>{


    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Perform authentication, set user data, and store token
        setUser(userData);
    };

    const logout = () => {
        // Perform logout, clear user data, and remove token
        setUser(null);
    };
    return (
        <><AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider></>
    );
}
export const useAuth = () =>{
    return useContext(AuthProvider);
}
