import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseurl: string = process.env.SUPABASE_URL || ""
const supabasekey: string = process.env.SUPABASE_KEY || ""

const supabase: SupabaseClient = createClient(supabaseurl, supabasekey)

export default supabase;