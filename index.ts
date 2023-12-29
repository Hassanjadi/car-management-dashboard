import express, { Express, Response, Request } from 'express';
import { CarsModel } from './models/cars';
import { Model } from 'objection';
import multer from 'multer';
import path from 'path';
import knex from 'knex';

const PORT = 3000;
const app: Express = express();

const knexInstance = knex({
  client: 'postgresql',
  connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'postgres',
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

interface IParams {
  id: string;
}

Model.knex(knexInstance);

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Endpoint Getting All Cars
app.get('/api/v1/cars', async (_, res: Response) => {
  const cars = await CarsModel.query();
  return res.json(cars);
});

// Endpoint Getting Specified Cars
app.get('/api/v1/cars/:id', async (req: Request<IParams>, res: Response) => {
  const id = req.params.id;
  const cars = await CarsModel.query().findById(id).throwIfNotFound();
  return res.json(cars);
});

// Endpoint Adding Cars and Heandling Images
app.post('/api/v1/cars', upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const body = { ...req.body, image: imagePath };

    const cars = await CarsModel.query().insert(body).returning('*');
    return res.json(cars);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint Update Cars
app.patch(
  '/api/v1/cars/:id',
  upload.single('image'),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const id = req.params.id;

      if (req.file) {
        const imagePath = path.join('/images', req.file.filename);
        body.image = imagePath;
      }

      const cars = await CarsModel.query()
        .where({ id })
        .patch(body)
        .throwIfNotFound()
        .returning('*');

      return res.json(cars);
    } catch (error) {

      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Endpoint Delete Cars
app.delete('/api/v1/cars/:id', async (req: Request<IParams>, res: Response) => {
  const id = req.params.id;
  await CarsModel.query()
    .where({ id })
    .del()
    .throwIfNotFound()
    .returning("*");
  return res.json({ message: 'Success delete cars' });
});

app.listen(PORT, () => {
    console.log(`⚡️ Server is running on port ${PORT}`)});