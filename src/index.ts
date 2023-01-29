import express, { json } from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import { handleApplicationErrors } from "./middlewares/errorHandlingMiddleware"
import "express-async-errors"
import { animeRouter } from "@/routers"
import { categoryRouter } from "./routers/CategoryRouter"
import { authorRouter } from "./routers/AuthorRouter"

const app = express()
app.use(cors());
app.use(json())
app
    .use("/animes", animeRouter)
    .use("/categories", categoryRouter)
    .use("/authors", authorRouter)
    .use(handleApplicationErrors);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));