// app.mjs
import express from 'express';
import connection from './database/dbs.js';
import Routes from './routes/routes.js';
import cors from 'cors';

connection();

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

app.use('/', Routes);

app.listen(port, () => {
  console.log('Server is running on', port);
});
