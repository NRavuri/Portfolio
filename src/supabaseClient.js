import { createClient } from "@supabase/supabase-js";

// Load environment variables correctly (Vite requirement)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables (helps debug on Render)
if (!supabaseUrl) {
  console.error("❌ ERROR: VITE_SUPABASE_URL is missing.");
}
if (!supabaseAnonKey) {
  console.error("❌ ERROR: VITE_SUPABASE_ANON_KEY is missing.");
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
