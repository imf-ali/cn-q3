import express from 'express';
import connectToDb from './config/db.js';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import trackerRoute from './routes/tracker.route.js'
import { applicationErrorMiddleware } from './middleware/applicationError.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.use(expressEjsLayouts);
app.use(express.static(path.join(path.resolve(), 'src', 'views')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/tracker', trackerRoute);

app.use(applicationErrorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectToDb();
})