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
  const resResult = await tableCollection(req.body).save();
  console.log(req.body);
  res.json({
    message: "Post method implemented",
    result: resResult,
  });
});

router.patch("/", async (req, res, next) => {
  const { _id, ...rest } = req.body;
  const updatedResult = await tableCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
  res.json({
    message: "Updated the datas",
    updatedResult,
  });
});

router.delete("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const deletedObj = await tableCollection.findByIdAndDelete(_id);
  res.json({
    message: "Selected ID is deleted",
  });
});

export default router;
