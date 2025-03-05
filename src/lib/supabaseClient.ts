import { createClient } from '@supabase/supabase-js'
const secretKey = import.meta.env.VITE_SUPABASE_SECRET_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaGR0cnpzY2RlZHpxYnh6bXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMDgwMDAsImV4cCI6MjA1NTc4NDAwMH0.qrl1CB_gbPFvWcrkdGdCC5rLV1pc2bQq074zDjFiBcA'
const supabase = createClient(supabaseUrl, secretKey)
export default supabase
