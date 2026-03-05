import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { authMiddleware, adminOnly } from '../middleware/auth.js';

const router = Router();

router.get('/', authMiddleware, adminOnly, async (req, res) => {
  const users = await User.find().select('-password').lean();
  res.json(users);
});

export default router;
