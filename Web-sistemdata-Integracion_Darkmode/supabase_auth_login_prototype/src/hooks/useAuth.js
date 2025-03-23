//import supabase from '../api/supabaseClient.js';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/authService";

export function useAuth() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    //Registro de Usuario -> Lógica exportada a Register.jsx
    const handleRegister = async (email, password) => {
        setMessage("");

        const { success, error } = await registerUser(email, password);

        if (error) {
            setMessage(error);
            return;
        }

        if (success) {
            setMessage("¡Cuenta creada exitosamente! Redirigiendo...");
            setTimeout(() => navigate("/profile"), 2000);
        }
    };

    // Login de Usuario -> Lógica exportada Login.jx para el manejo
    const handleLogin = async (email, password) => {
        setMessage("");

        const { success, error } = await loginUser(email, password);
        if (error) {
            setMessage(error);
            return;
        }

        if (success) {
            navigate("/dashboard");
        }
    };

    return { handleRegister, handleLogin, message };
}
