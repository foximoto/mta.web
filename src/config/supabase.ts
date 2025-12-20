import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kqkvmdvoqoputsijgezu.supabase.co";
const supabaseKey = "sb_publishable_Fr92suET2JyDNnuTGwb60g_SQmYA_W_";

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
