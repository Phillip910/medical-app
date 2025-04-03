// filepath: c:\Users\phill\test-med\medical-app\src\context\AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // Simulate login by setting user data
    };

    const logout = () => {
        setUser(null); // Simulate logout by clearing user data
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};