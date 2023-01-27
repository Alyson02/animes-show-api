import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import router from "./routers/"
import { handleApplicationErrors } from "./middlewares/errorHandlingMiddleware"

const app = express()
app.use(cors());
app.use(router);
app.use(handleApplicationErrors)

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));