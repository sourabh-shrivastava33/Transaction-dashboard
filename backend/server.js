import "express-async-errors";
import path from "path";
import { dirname } from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
// middleware
import { errorHandlerMiddleware } from "./middlewares/errorHandleMiddleware.js";
// routes
import transactionRouter from "./router/transactionRoute.js";
// errors
import { NotFoundError } from "./errors/customErrors.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/transaction", transactionRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);
app.get("*", (req, res) => {
  throw new NotFoundError("No routes found");
});
app.use(errorHandlerMiddleware);
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
