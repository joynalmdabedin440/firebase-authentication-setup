import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    
    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                console.log("no user found");
                
            }
        })

        return () => {
            unsubscribe()
        }
    },[])


    const contextApi = {
        createUser,
        loginUser,
        user
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