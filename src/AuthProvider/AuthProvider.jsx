import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebse.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const authContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser, 'log');
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const useInfo = {
        user, loading,
        register,
        login,
        logOut
    }



    return (
        <authContext.Provider value={useInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;