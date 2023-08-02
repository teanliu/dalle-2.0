import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

const port = 8080

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
  res.send("Hello from the other side");
})

const startServer = async () => {
  app.listen(port, () => {
    console.log(`server has started on port http://localhost:${port}`)
  })
};

startServer();
