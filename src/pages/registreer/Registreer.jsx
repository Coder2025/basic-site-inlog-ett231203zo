import {useState} from 'react';
import axios from "axios";
import login from "../login/Login.jsx";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        try {
            console.log(email, password, username);
            const res = await axios.post('http://localhost:3000/register', {
                 email,
                 password,
                 username,
            });

           // login(res.data.accessToken);
        } catch (e) {
            console.error("Registratie mislukt ⛔", e)
            // Hier je error handling in de UI
        }
    }

    return (
        <main>
            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                           autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                           autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           autoComplete="off"/>
                </div>
                <button type="submit">Registreren</button>
            </form>
        </main>
    );
}

export default Register;