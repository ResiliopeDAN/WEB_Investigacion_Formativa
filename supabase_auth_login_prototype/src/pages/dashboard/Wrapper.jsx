// El Wrapper es un archivo cuya función es prevenir el acceso a partes del sistema que requieran ciertas condiciones.
// Es decir, este wrapper se encargará de buscar la sesión necesaria para el acceso al dashboard, y si es que no la llega a encontrar entonces restringirá el acceso.
// Si éste no encuenta la sesión redirigirá al usuario al página de inicio de sesión.


import { useEffect, useState } from "react";
import supabase from "../../api/supabaseClient.js";
import supabaseClient from "../../api/supabaseClient.js";
import {Navigate} from "react-router"; supabaseClient
import PropTypes from "prop-types";


function Wrapper({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const  getSession = async () => {
            const {
                data: {session},
            } = await supabase.auth.getSession();
            // !!null -> false | Si la sesión no existe la autenticación se generará como falsa
            // !!{} -> true | Si la sesión si existe la autenticación se generará como verdadera
            setAuthenticated(!!session);
            setLoading(false);
        };

        getSession();

    },[]);

    if (loading) {
        return <div>Cargando...</div>;
    } else {
        if (authenticated) {
            return <>{children}</>
        }
        return <Navigate to="/login" />;
    }
}

// Validación de props con PropTypes:
// Se especifica que el prop 'children' debe ser un nodo de React y es obligatorio.
// Esto ayuda a garantizar que el componente reciba el contenido correcto, evitando errores
// y facilitando la documentación y mantenimiento del código.
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;