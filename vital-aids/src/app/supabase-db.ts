import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseurl: string = process.env.SUPABASE_URL || "https://vkxybcxpcbfejfltzaek.supabase.co"
const supabasekey: string = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZreHliY3hwY2JmZWpmbHR6YWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MzIzMjEsImV4cCI6MjA3MDMwODMyMX0.rrtajLD6TVoZ-B9AdlxzINpr0a4zce7hru4QmLtsP0Q"

const supabase: SupabaseClient = createClient(supabaseurl, supabasekey)

export default supabase;