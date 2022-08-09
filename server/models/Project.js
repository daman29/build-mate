const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  storeys: {
    type: Number,
    required: true,
    enum: [1, 2],
    default: 1,
  },
  councilApproval: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  wallType: {
    type: String,
    enum: ["Brick-veneer", "Hebel", "Double brick"],
  },
  wallType2nd: {
    type: String,
    enum: ["Brick-veneer", "Hebel", "Double brick"],
  },
  roofType: {
    type: String,
    enum: ["Colorbond", "Tile"],
  },
  structure: {
    type: String,
    enum: ["Steel", "Timber"],
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
