import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { authMiddleware, adminOnly, signToken } from '../middleware/auth.js';

const router = Router();

router.post('/login',
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.role !== 'admin') return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = signToken(user._id);
    res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
  }
);

router.get('/me', authMiddleware, adminOnly, async (req, res) => {
  res.json({ user: req.user });
});

export default router;
