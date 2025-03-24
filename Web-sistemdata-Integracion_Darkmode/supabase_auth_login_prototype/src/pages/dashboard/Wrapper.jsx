// El Wrapper es un archivo cuya función es prevenir el acceso a partes del sistema que requieran ciertas condiciones.
// Es decir, este wrapper se encargará de buscar la sesión necesaria para el acceso al dashboard, y si es que no la llega a encontrar entonces restringirá el acceso.
// Si éste no encuenta la sesión redirigirá al usuario al página de inicio de sesión.


import { useEffect, useState } from "react";
import supabase from "../../api/supabaseClient.js";
import supabaseClient from "../../api/supabaseClient.js";
import {Navigate} from "react-router"; supabaseClient
import PropTypes from "prop-types";


function Wrapper({ children, rolPermitido }) {
    const [loading, setLoading] = useState(true);
    const [autenticado, setAutenticado] = useState(false);
    const [rolValido, setRolValido] = useState(false);

    useEffect(() => {
        const verificarSesionYRol = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error || !session) {
                setAutenticado(false);
                setLoading(false);
                return;
            }

            const userId = session.user.id;

            // 1. Obtenemos el perfil del usuario
            const { data: perfil, error: perfilError } = await supabase
                .from("perfiles")
                .select("role_id")
                .eq("id", userId)
                .single();

            if (perfilError || !perfil) {
                setAutenticado(false);
                setLoading(false);
                return;
            }

            // 2. Obtenemos el rol del usuario
            const { data: rolData, error: rolError } = await supabase
                .from("roles")
                .select("nombre")
                .eq("id", perfil.role_id)
                .single();

            if (rolError || !rolData) {
                setAutenticado(false);
                setLoading(false);
                return;
            }

            setAutenticado(true);
            setRolValido(rolData.nombre === rolPermitido);
            setLoading(false);
        };

        verificarSesionYRol();
    }, [rolPermitido]);

    if (loading) return <div>Cargando...</div>;

    if (!autenticado) {return <Navigate to="/login" />;}

    if (!rolValido) return null;

    return <>{children}</>;
}

// Validación de props con PropTypes:
// Se especifica que el prop 'children' debe ser un nodo de React y es obligatorio.
// Esto ayuda a garantizar que el componente reciba el contenido correcto, evitando errores
// y facilitando la documentación y mantenimiento del código.
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    rolPermitido: PropTypes.string.isRequired,
};

export default Wrapper;