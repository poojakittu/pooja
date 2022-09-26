import React from "react";

export const AuthContext =React.createContext();

export default function AuthContextprovider ({children}) {
    const[isAuth,setAuth]=React.useState(false)
    const toggle=()=>{
        setAuth(!isAuth)
    }
    return(
        <AuthContext.Provider value={{isAuth,toggle}}>
            {children}
        </AuthContext.Provider>
    )
}

 