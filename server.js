import express from "express";

import userRouter from "./src/userRouter.js";

import dbConnect from "./src/dbConfig.js";

dbConnect();

const app = express();
const PORT = 8000;
// Middleware
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
