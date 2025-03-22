import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../../api/supabaseClient";

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get("token");

            if (!token) {
                setMessage("Token de verificación no encontrado.");
                return;
            }

            const { error } = await supabase.auth.verifyOtp({
                type: "email",
                token,
            });

            if (error) {
                setMessage("Error al verificar el correo.");
            } else {
                setMessage("Correo verificado con éxito. Redirigiendo...");
                setTimeout(() => navigate("/login"), 3000);
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div>
            <h2>Verificación de Correo</h2>
            <p>{message}</p>
        </div>
    );
}

export default VerifyEmail;
