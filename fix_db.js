import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// Need service role key to alter table or raw SQL, but standard JS client can't do raw SQL
// Let's print out what needs to be done since we can't run raw SQL easily via JS without rpc
console.log("SQL to execute:");
console.log("ALTER TABLE star_review ALTER COLUMN user_id TYPE text;");
