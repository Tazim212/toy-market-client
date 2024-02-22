/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase_config';


export const AuthContext = createContext()

const auth = getAuth(app)

const googleSigned = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')

    const SignedIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoggedIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Googleprovider = () =>{
        return signInWithPopup(auth, googleSigned)
    }
    const LogOut = () => {
        return signOut(auth)
    }

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        return () => {
            return unsubscribe();
        }
    })
    const authInfo = {
        user,
        SignedIn,
        LoggedIn,
        LogOut,
        Googleprovider
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;