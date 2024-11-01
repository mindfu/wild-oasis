import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://omuoambdpenwcqnuyach.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdW9hbWJkcGVud2NxbnV5YWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MjI0NzQsImV4cCI6MjAzOTA5ODQ3NH0.ciMPjcmRC0noa7-fhJbb24kIhMAzJI-FOg1ne-sYxBE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
