import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.init";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
            
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
            
            
            
        })

        return () => {
            unsubscribe();
        }
    },[])


    const contextApi = {
        createUser,
        loginUser,
        user,
        logOutUser,
        loading
    }

    



    return (
        <AuthContext.Provider value={contextApi}>
            {children}

        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;