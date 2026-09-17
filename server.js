import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'COAL AI Transport 2026', version: '2.0.0' });
});

app.get('/api/dashboard', (_req, res) => {
  res.json({
    mode: 'demo',
    stats: {
      vehicles: 42,
      activeVehicles: 34,
      tripsToday: 164,
      coalTons: 6420,
      fuelLiters: 18730,
      maintenance: 5,
      idle: 3
    }
  });
});

const dist = path.join(__dirname, 'dist');
app.use(express.static(dist));
app.get(/.*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`COAL AI listening on ${PORT}`);
});
