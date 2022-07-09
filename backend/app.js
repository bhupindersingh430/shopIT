import express, { json } from "express";
import errorMiddleware from "./middlewares/errors.js";
const app = express();

app.use(json());

// import all routes
import products from "./routes/product.js";

app.use("/api/v1", products);

//middleware to handle errors
app.use(errorMiddleware);

export default app;