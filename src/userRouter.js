import express from "express";

import mongoose from "mongoose";
const router = express.Router();

// Database table selection
const taskSchema = new mongoose.Schema({}, { strict: false });
const tableCollection = mongoose.model("Task", taskSchema);

// Using the methods

router.get("/", async (req, res, next) => {
  const result = await tableCollection.find();
  console.log(result);
  res.json({
    message: "Get method working fine",
    result: result,
  });
});

router.post("/", async (req, res, next) => {
  const resResult = await tableCollection(req.body);
  console.log(req.body);
  res.json({
    message: "Post method implemented",
    result: resResult,
  });
});

router.put("/", (req, res) => {
  res.json("Put Method");
});

router.delete("/", (req, res) => {
  res.json("Delete Method");
});

export default router;
