import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import blogRoutes from './routes/blog.js';
import caseStudyRoutes from './routes/caseStudies.js';
import servicesRoutes from './routes/services.js';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import userRoutes from './routes/users.js';

connectDB().then(() => console.log('MongoDB connected')).catch((e) => console.warn('MongoDB unavailable — running without database:', e.message));

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests' },
});
app.use('/api/', limiter);

app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/users', userRoutes);

app.get('/api/health', (_, res) => res.json({ ok: true }));

app.use((err, req, res, next) => {
  console.error(err.message || err);
  if (req.method === 'GET') return res.json([]);
  res.status(500).json({ error: 'Service unavailable' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use. Either:\n  1. Stop the other process using port ${PORT} (e.g. close the other terminal that ran the server),\n  2. Or set PORT=5001 in server/.env and restart.\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
