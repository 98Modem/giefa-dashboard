// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Directly paste your Supabase credentials for now
const supabaseUrl = 'https://gvhnknkcpcuivwajojlm.supabase.co';
const supabaseKey = 'sb_publishable_wf1yea51ZLR9Pwpw5SPtOA_Ba-7a5JI';

export const supabase = createClient(supabaseUrl, supabaseKey);