//import React from "react";
import { useState } from "react";
import supabase from "../api/supabaseClient.js";
import supabaseClient from "../api/supabaseClient.js"; supabaseClient
import { Link, useNavigate } from "react-router-dom"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Hook para redirección a la página de ProfileForm para ingresar los datos del perfil de usuario creado

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signUp({
           email: email,
           password: password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("¡Cuenta creada exitosamente! Redirigiendo...");
            // Esperar 2 segundos y redirigir al formulario de perfil
            setTimeout(() => {
                navigate("/profile");
            }, 2000);

        }

        setEmail("");
        setPassword("");
    };

    return (
      <div>
          <h2>Register</h2>
          <br></br>
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