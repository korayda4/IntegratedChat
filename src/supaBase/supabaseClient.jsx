// supabaseClient.jsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gxwpgtfrztveqgqycknq.supabase.co';
const supabaseKey2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d3BndGZyenR2ZXFncXlja25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MTIzODQsImV4cCI6MjAwODk4ODM4NH0.ro3BNmM2uxE6CoWZXHO66k7Fgzugzd2PlTajWtgtzLU';

export const supabase = createClient(supabaseUrl, supabaseKey2);

