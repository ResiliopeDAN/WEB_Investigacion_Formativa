//import supabase from '../api/supabaseClient.js';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/authService";
//import {updateProfile} from "@/services/profileService.js"; -> Esto se transfirió al UseProfile
import supabase from "@/api/supabaseClient.js";

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
            const {
                data: { session },
            } = await supabase.auth.getSession();

            const userId = session.user.id;

            // Paso 1: Obtener el perfil
            const { data: perfil, error: perfilError } = await supabase
                .from("perfiles")
                .select("role_id")
                .eq("id", userId)
                .single();

            if (perfilError || !perfil) {
                setMessage("Error al obtener el perfil del usuario.");
                return;
            }

            // Paso 2: Obtener el nombre del rol
            const { data: rolData, error: rolError } = await supabase
                .from("roles")
                .select("nombre")
                .eq("id", perfil.role_id)
                .single();

            if (rolError || !rolData) {
                setMessage("Error al obtener el rol.");
                return;
            }

            const rol = rolData.nombre;

            if (rol === "Administrador") {
                navigate("/admin/dashboard");
            } else if (rol === "Registrado") {
                navigate("/user/dashboard");
            } else {
                navigate("/sin-acceso");
            }
        }
    };

    return { handleRegister, handleLogin, message };
}
