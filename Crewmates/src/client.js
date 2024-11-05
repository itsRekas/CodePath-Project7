import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://trnivhbmcfumcgqcgsxf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPA_KEY
console.log(import.meta.env.SUPA_KEY)
export const supabase = createClient(supabaseUrl, supabaseKey)