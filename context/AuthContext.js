import React, {useContext, useState, useEffect, useRef} from 'react'
import { auth, db , googleProvider} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'

const AuthContext = React.createContext() 

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const[loading, setLoading] = useState(true)
    const userInfo = useRef()

    function signup(email,password){
        createUserWithEmailAndPassword(auth, email, password) 
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function signInWithGoogle(){
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        signInWithGoogle,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}