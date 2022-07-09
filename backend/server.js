import app from "./app.js";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";

// setting up config file
dotenv.config({ path: "../backend/config/config.env" });

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
