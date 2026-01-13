import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️  Supabase environment variables not set. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
}

// Only create client if we have valid credentials
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://example.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTc2OTIwMCwiZXhwIjoxOTU3MzQ1MjAwfQ.dc6sOMr_PGVo8FHTBKwOk0ZXwJ9YqPJwiW5Nt4wt-Jk');

// Type definitions for our database
export interface Bite {
  id: string;
  title: string;
  hook: string;
  bullets: string[];
  example: string;
  micro_action: string;
  category: string;
}

export interface DeepDive {
  id: string;
  bite_id: string;
  content: string;
}

// Category to icon mapping
export const categoryIcons: Record<string, string> = {
  'Entrepreneurship': '💼',
  'Psychology': '🧠',
  'Decision-making': '📊',
  'Communication': '💬',
  'Health': '🏃',
  'Technology': '⚙️',
  'Productivity': '💡',
  'Design': '🎨',
  'Finance': '💰',
};
