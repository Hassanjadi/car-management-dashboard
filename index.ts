import express, { Express, Response, Request } from 'express';
import knex from 'knex';
import { CarsModel, Cars } from './models/cars';
import { Model } from 'objection';

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

interface IParams {
  id: string;
}

Model.knex(knexInstance);

app.use(express.json());

app.get("/api/v1/cars", async (_, res: Response) => {
  const cars = await CarsModel.query();
  return res.json(cars);
});

app.get("/api/v1/cars/:id", async (req: Request<IParams>, res: Response) => {
  const id = req.params.id;
  const cars = await CarsModel.query().findById(id).throwIfNotFound();
  return res.json(cars);
});

app.post("/api/v1/cars", async (req: Request<{}, {}, Cars>, res: Response) => {
  const body = req.body;
  const cars = await CarsModel.query().insert(body).returning("*");
  return res.json(cars);
});

app.patch(
  "/api/v1/cars/:id",
  async (req: Request<IParams, {}, Partial<Cars>>, res: Response) => {
    const body = req.body;
    const id = req.params.id;
    const cars = await CarsModel.query()
      .where({ id })
      .patch(body)
      .throwIfNotFound()
      .returning("*");
    return res.json(cars);
  }
);

app.delete("/api/v1/cars/:id", async (req: Request<IParams>, res: Response) => {
  const id = req.params.id;
  await CarsModel.query()
    .where({ id })
    .del()
    .throwIfNotFound()
    .returning("*");
  return res.json({ message: "Success delete cars" });
});

app.listen(PORT, () => {
    console.log(`⚡️ Server is running on port ${PORT}`)});