const db = require("../config/connection");
const { User, Project, Task, Teammate } = require("../models");
const userSeeds = require("./userSeeds.json");
const projectSeeds = require("./projectSeeds.json");
const taskSeeds = require("./taskSeeds.json");
const teammateSeeds = require("./teammateSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Project.deleteMany({});
    await Teammate.deleteMany({});
    await Task.deleteMany({});

    await User.create(userSeeds);
    await Project.create(projectSeeds);
    await Teammate.create(teammateSeeds);
    await Task.create(taskSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
