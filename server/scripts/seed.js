import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../models/User.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/intelera';

async function seed() {
  await mongoose.connect(MONGODB_URI);
  const email = process.env.ADMIN_EMAIL || 'admin@intelera.com';
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin user already exists:', email);
    process.exit(0);
    return;
  }
  await User.create({ email, password, name: 'Admin', role: 'admin' });
  console.log('Admin user created:', email);
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
