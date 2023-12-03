import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider ({ children }) {

    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,

    });
        // Token opslaat in localstorage >>

     function login(){
            setAuth({
            ...auth,
            isAuth: true,
            user: {
                email: 'pietje@puk.nl',
                id: 1
            }
        })
        navigate('/');
    }

    function logout() {
            setAuth({
                ...auth,
                isAuth: false,
                user: null
            })
        navigate('/');
    }

    const data = {
        isAuth: auth.isAuth,
        logout,
        login,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;