import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Página No Encontrada</h1>
            <p>La página que buscas no existe o fue movida.</p>
            <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                Volver al Inicio
            </Link>
        </div>
    );
}

export default NotFound;
