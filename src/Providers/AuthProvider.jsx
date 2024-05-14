import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, image) => {
        setLoading(false)
        return updateProfile(auth.currentUser, 
            {
                displayName: name, 
                photoURL: image
            })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            const Email = currentUser?.email || user?.email;
            const loggedMail = {email: Email};
            setUser(currentUser);
            setLoading(false);

            if(currentUser){
                axios.post("http://localhost:5000/jwt",loggedMail, {withCredentials: true})
                .then(res=>console.log(res.data))
            }
            else{
                axios.post("http://localhost:5000/logout",loggedMail, {withCredentials: true})
                .then(res=>console.log(res.data))
            }
        })
        return ()=> unsubscribe();
    },[])

    const logOut = () =>{
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const AuthInfo = {
        user,
        createUser,
        login,
        googleLogin,
        logOut,
        loading,
        updateUserInfo,
        setUser,
        setLoading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;