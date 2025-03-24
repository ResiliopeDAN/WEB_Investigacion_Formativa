import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://elgfvxnkjbmadfwhbkxv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZ2Z2eG5ramJtYWRmd2hia3h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjUyMTc1MywiZXhwIjoyMDUyMDk3NzUzfQ.AcnW5VwoX294sgW3kYvY3UCEogbj78S7rVo3kLuxhaU";

export const supabase1 = createClient(supabaseUrl, supabaseKey);