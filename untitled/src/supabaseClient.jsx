import { createClient } from '@supabase/supabase-js';

// URL y clave pública del proyecto Supabase
const supabaseUrl = 'https://vxcwbmsawpbzqvosgcyj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Y3dibXNhd3BienF2b3NnY3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODI3MzcsImV4cCI6MjA1MTA1ODczN30.PAR7AInFkOEeKQagWdMUuVdfzhwkBoGVejfbB1cioh0';

//como está en la documentación:
//const supabase = createClient('https://vxcwbmsawpbzqvosgcyj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Y3dibXNhd3BienF2b3NnY3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODI3MzcsImV4cCI6MjA1MTA1ODczN30.PAR7AInFkOEeKQagWdMUuVdfzhwkBoGVejfbB1cioh0')



// Creación del cliente Supabase - Estamos básicamente poniéndole un alias "supabase" para poder importarlo en otros archivos con el nombre de "supabase", este nombre lo podemos cambiar a nuestro gusto.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
