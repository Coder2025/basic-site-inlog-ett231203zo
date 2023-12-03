import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider ({ children }) {

    const navigate = useNavigate();

    const [isAuth, toggleIsAuth] = useState(false);
        // Token opslaat in localstorage >>
     function login(){
        toggleIsAuth(true)
        navigate('/');
    }

    function logout() {
        toggleIsAuth(false);
        navigate('/');
    }

    const data = {
        isAuth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;