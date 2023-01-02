import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rfsaezprlwzulhvguxzk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmc2FlenBybHd6dWxodmd1eHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1NTc3OTQsImV4cCI6MTk4ODEzMzc5NH0.7Cl78z-Gfh7ogQ-2vO4-RYc5bmIQoYlT-4Rw0u00NdY'
export const supabase = createClient(supabaseUrl, supabaseKey)