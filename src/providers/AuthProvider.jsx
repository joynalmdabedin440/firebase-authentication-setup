import { createContext } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const user = {
        name:"hululu"
    }



    return (
        <AuthContext.Provider value={user}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;