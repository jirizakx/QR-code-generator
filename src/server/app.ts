import express from 'express';
import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const router = Router();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

router.get('/', (_req, res) => {
  res.render('index', { img: '' });
});

router.get('/generate', (_req, res) => {
  res.render('index', { img: '' });
});

app.use('/qr', router);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
