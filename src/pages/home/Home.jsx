import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";


const Home = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <>
            <h1>HomePage</h1>
        { isAuth  ? <h2>Welkom!! Je bent inglogd! </h2>:<p>Voor meer info .. Log in ajb.. </p>}
        </>
    );
};

export default Home;