import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebse.config';
export const authContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const user = null
    const useInfo = {
        user,
    }
    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;