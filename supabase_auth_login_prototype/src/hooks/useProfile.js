import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../services/profileService";
import supabase from "../api/supabaseClient";

export function useProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        numero_contacto: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setError("Debes iniciar sesión para completar el perfil.");
                return;
            }

            const { profile, error } = await getProfile(user.id);
            if (error) {
                setError("Error al obtener datos del perfil.");
            } else {
                setFormData(profile);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setError("Debes iniciar sesión para completar el perfil.");
            return;
        }

        const { error } = await updateProfile(user.id, formData);
        if (error) {
            setError(error);
        } else {
            setSuccess("Perfil actualizado correctamente.");
            setTimeout(() => navigate("/dashboard"), 2000);
        }
    };

    return { formData, error, success, handleChange, handleSubmit };
}
