import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

const app = express()
app.use(cors());

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));