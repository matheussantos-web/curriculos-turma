export default function handler(req, res) {
  // Retorna as variáveis configuradas na dashboard da Vercel
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY
  });
}