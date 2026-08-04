import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

const isConfigured = supabaseUrl && !supabaseUrl.includes('your-supabase-project') && supabaseAnonKey && !supabaseAnonKey.includes('your-supabase-anon-key');

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;

app.get('/api/health', async (req, res) => {
  if (!supabase) {
    return res.status(200).json({
      status: 'backend_online',
      supabase_connected: false,
      message: 'Backend server is running! Supabase credentials are using placeholder values. Update .env with real SUPABASE_URL and SUPABASE_ANON_KEY.',
    });
  }

  try {
    const { error } = await supabase.from('profiles').select('count', { count: 'exact', head: true });
    if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
      return res.status(200).json({
        status: 'backend_online',
        supabase_connected: false,
        message: `Supabase error: ${error.message}`,
      });
    }

    return res.status(200).json({
      status: 'backend_online',
      supabase_connected: true,
      message: 'Node.js Express backend and Supabase connection verified successfully!',
    });
  } catch (err) {
    return res.status(500).json({
      status: 'backend_online',
      supabase_connected: false,
      message: `Failed to ping Supabase: ${err.message}`,
    });
  }
});

app.get('/', (req, res) => {
  res.redirect('/api/health');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  if (isConfigured) {
    console.log('Supabase client initialized.');
  } else {
    console.log('Supabase is not configured yet. Please update Collab-Connect/backend/.env with your Supabase credentials.');
  }
});
