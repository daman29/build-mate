const { Schema, model } = require("mongoose");

const teammateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [
      "Bricky",
      "Sparky",
      "Plumber",
      "Concreter",
      "Chippy",
      "Architect",
      "Engineer",
      "Surveyor",
      "Draftsperson",
      "Supervisor",
      "Certifier",
      "Waterproofer",
      "Roofer",
      "Tiler",
      "Painter",
      "Landscaper",
      "General",
      "Other",
    ],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  teamLeadId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Teammate = model("Teammate", teammateSchema);

module.exports = Teammate;
