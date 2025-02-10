

import supabaseClient from "../api/supabaseClient.js"; supabaseClient
import supabase from "../api/supabaseClient.js";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function ProfileForm() {
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

            const { data, error } = await supabase
                .from("perfiles")
                .select("nombres, apellidos, numero_contacto")
                .eq("id", user.id)
                .single();
            if (error) {
                setError ("Error al obtener datos del perfil");
            } else {
                setFormData(data);
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

        // Obtener usuario autenticado en Supabase
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setError("Debes iniciar sesión para completar el perfil.");
            return;
        }

        // Actualizar datos en la tabla perfiles
        const { error } = await supabase
            .from("perfiles")
            .update({ //Estamos usando el metodo update para actualizar los datos

                nombres: formData.nombres,
                apellidos: formData.apellidos,
                numero_contacto: formData.numero_contacto,
            })
            .eq("id", user.id);

        if (error) {
            setError(error.message);
        } else {
            setSuccess("Perfil actualizado correctamente.");
            setTimeout(() => navigate("/dashboard"), 2000);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Registro de Perfil</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Nombres:</label>
                    <input
                        type="text"
                        name="nombres"
                        placeholder="Ingrese sus nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Ingrese sus apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Número de Contacto:</label>
                    <input
                        type="tel"
                        name="numero_contacto"
                        placeholder="Ingrese su número"
                        value={formData.numero_contacto}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
                    Guardar Perfil
                </button>
            </form>
        </div>
    );
}

export default ProfileForm;
