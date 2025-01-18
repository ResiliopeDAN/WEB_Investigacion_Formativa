import { createClient } from '@supabase/supabase-js';

// URL y clave pública del proyecto Supabase
const supabaseUrl = '';
const supabaseAnonKey = '';

//como está en la documentación:
//const supabase = createClient('', '')



// Creación del cliente Supabase - Estamos básicamente poniéndole un alias "supabase" para poder importarlo en otros archivos con el nombre de "supabase", este nombre lo podemos cambiar a nuestro gusto.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
