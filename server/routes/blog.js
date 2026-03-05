import { Router } from 'express';
import { body, validationResult, query } from 'express-validator';
import BlogPost from '../models/BlogPost.js';
import { authMiddleware, adminOnly, optionalAuth } from '../middleware/auth.js';

const router = Router();

function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

router.get('/', optionalAuth, async (req, res) => {
  const category = req.query.category;
  const published = req.query.published !== 'false' && !req.userId;
  const q = published ? { published: true } : {};
  if (category) q.category = category;
  const posts = await BlogPost.find(q).sort({ publishedAt: -1, createdAt: -1 }).lean();
  res.json(posts);
});

router.get('/featured', async (req, res) => {
  const posts = await BlogPost.find({ published: true }).sort({ publishedAt: -1 }).limit(3).lean();
  res.json(posts);
});

router.get('/:slug', async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug }).lean();
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

router.post('/', authMiddleware, adminOnly,
  body('title').notEmpty().trim(),
  body('excerpt').optional().trim(),
  body('content').optional().trim(),
  body('category').optional().trim(),
  body('featuredImage').optional().trim(),
  body('published').optional().isBoolean(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const data = { ...req.body, slug: req.body.slug || slugify(req.body.title) };
    if (data.published) data.publishedAt = new Date();
    const post = await BlogPost.create(data);
    res.status(201).json(post);
  }
);

router.put('/:id', authMiddleware, adminOnly,
  body('title').optional().notEmpty().trim(),
  body('slug').optional().trim(),
  body('excerpt').optional().trim(),
  body('content').optional().trim(),
  body('category').optional().trim(),
  body('featuredImage').optional().trim(),
  body('published').optional().isBoolean(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const post = await BlogPost.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: new Date() }, { new: true });
    if (!post) return res.status(404).json({ error: 'Not found' });
    if (req.body.published && !post.publishedAt) post.publishedAt = new Date();
    await post.save();
    res.json(post);
  }
);

router.delete('/:id', authMiddleware, adminOnly, async (req, res) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json({ deleted: true });
});

export default router;
