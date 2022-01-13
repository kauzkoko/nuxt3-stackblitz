import { useRuntimeConfig } from '#app';
import { createClient } from '@supabase/supabase-js';

export default function () {
  const config = useRuntimeConfig();
  const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
  return supabase;
}
