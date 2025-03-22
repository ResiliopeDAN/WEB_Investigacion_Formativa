import supabase from "../api/supabaseClient";

// Función para obtener el perfil del usuario
export async function getProfile(userId) {
    const { data, error } = await supabase
        .from("perfiles")
        .select("nombres, apellidos, numero_contacto")
        .eq("id", userId)
        .single();

    if (error) {
        return { profile: null, error: error.message };
    }

    return { profile: data, error: null };
}

// Función para actualizar el perfil del usuario
export async function updateProfile(userId, profileData) {
    const { error } = await supabase
        .from("perfiles")
        .update({
            nombres: profileData.nombres,
            apellidos: profileData.apellidos,
            numero_contacto: profileData.numero_contacto,
        })
        .eq("id", userId);

    if (error) {
        return { error: error.message };
    }

    return { error: null };
}
