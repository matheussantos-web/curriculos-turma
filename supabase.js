import{createClient} from'@supabase/supabase-js'

const supabaseUrl ='https://eempgprspimlhzlofvjx.supabase.co';
const supabaseAnonkey='sb_publishable_H8eepB7xyJndr_TdsvuiVw_pJbsPC5k';

const supabase =createClient(supabaseUrl, supabaseAnonkey);