import { createClient } from "@supabase/supabase-js";

//Función: Configura la conexión con Supabase.
// Características:
// Usa las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_KEY para la configuración.
// Exporta el cliente de Supabase para uso en toda la aplicación​supabaseClient.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
