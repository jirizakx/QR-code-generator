import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (_req, res) => {
  res.render('index', { title: 'Hello Jirka' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
