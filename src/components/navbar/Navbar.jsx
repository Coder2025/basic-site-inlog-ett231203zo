import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext.jsx";



const Navbar = () => {
    const {isAuth,logout,login}= useContext(AuthContext)
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/registreer">Registratie</NavLink></li>
            </ul>
            {isAuth ?
                <button type="button" onClick={logout}>Logout</button>
            :
                <>
                    <button type="button" onClick={login}>Login</button>
                    <NavLink to="/registreer"><button>Registratie</button></NavLink>
                </>
            }
        </nav>
    );
};

export default Navbar;