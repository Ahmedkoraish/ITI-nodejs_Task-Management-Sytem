const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  //  your schema
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
