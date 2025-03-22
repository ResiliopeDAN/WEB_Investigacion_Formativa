import { useProfile } from "@/hooks/useProfile.js";

function ProfileForm() {
    const { formData, error, success, handleChange, handleSubmit } = useProfile();

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
