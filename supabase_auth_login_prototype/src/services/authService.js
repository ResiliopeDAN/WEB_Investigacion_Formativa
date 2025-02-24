import supabase from "../api/supabaseClient";

///Este archivo separa la interacción con Supabase, asegurando que useAuth.js solo maneje la lógica de estado.

// Función para registrar usuario en Supabase
export async function registerUser(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return { success: false, error: error.message };
    }


    return { success: true, data };
}

// Función para iniciar sesión en Supabase
export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, data };
}


