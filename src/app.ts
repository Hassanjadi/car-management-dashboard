import express, { Express } from 'express';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// JSON Parser Middleware
app.use(express.json());

app.listen(PORT, () => {
    console.log(`⚡️ Server is running on port ${PORT}`)});