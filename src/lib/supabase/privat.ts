import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/types';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('Missing env vars SUPABASE_URL or SUPABASE_ANON_KEY');
}

const publicClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || '',
  {
    auth: {
      persistSession: false,
    },
  },
);

export default publicClient;
