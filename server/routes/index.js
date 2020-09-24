import express from 'express';
import cors from 'cors';

import { getPosts } from '../controllers';

const router = express.Router();

const corsConfig = {
  origin: '*'
};

router.get('/posts', cors(corsConfig), getPosts);

export default router;
