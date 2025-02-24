import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


function Register() {
    const { handleRegister, message } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleRegister(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h2>Registro</h2>
            <br />
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

                <button type="submit">Crear Cuenta</button>
            </form>

            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">Inicia sesión aquí.</Link>
        </div>
    );
}

export default Register;
