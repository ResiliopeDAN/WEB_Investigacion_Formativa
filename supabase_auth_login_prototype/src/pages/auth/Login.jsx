import { useState } from "react";
//import supabase from "../../api/supabaseClient.js";
//import supabaseClient from "../../api/supabaseClient.js"; supabaseClient
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


function Login() {
    const { handleLogin, message } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h2>Login</h2>
            <br></br>
            {message && <span>{message}</span>}

            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">Log in</button>
            </form>
            <span>¿No tienes cuenta aún?</span>
            <Link to="/register">Registrate</Link>
        </div>
    );

}

export default Login;