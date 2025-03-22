import supabase from "../api/supabaseClient";

//Este archivo separa la interacción con Supabase, asegurando que useAuth.js solo maneje la lógica de estado.

// Función para registrar usuario en Supabase, se modificó para la verificación de correo en el cual ya no se usa data.
export async function registerUser(email, password) {
    const { error } = await supabase.auth.signUp({
        email, password });

    if (error) {
        return { success: false, error: error.message };
    }


    return { success: true, message: "Verifica tu correo antes de iniciar sesión" };
}

// Función para iniciar sesión en Supabase
// Se hizo la inclusión de un if para el manejo de mensajes en caso de que no se haya verificado el correo.
export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        if (error.message.includes("Email not confirmed")) {
            return { success: false, error: "Debes verificar tu correo antes de iniciar sesión." };
        }
        return { success: false, error: error.message };
    }

    return { success: true, data };
}
