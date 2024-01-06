import express, { Application } from "express";
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();
const PORT:(number | string) = process.env.PORT || 8000;
console.log(PORT);
const app:Application = express();


app.use(cors());
app.use(express.json());


app.listen(PORT,
    ()=>console.log(`App is listening on http://localhost:${PORT}`));