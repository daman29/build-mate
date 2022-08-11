const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  predecessor: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  successor: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  assigneeId: {
    type: Schema.Types.ObjectId,
    ref: "Teammate",
  },
  priority: {
    type: String,
    enum: ["low", "mid", "high"],
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
