const db = require("../config/connection");
const { User, Project, Task, Teammate } = require("../models");
const userSeeds = require("./userSeeds.json");
const teammateSeeds = require("./teammateSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Teammate.deleteMany({});

    await User.create(userSeeds);
    await Teammate.create(teammateSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
