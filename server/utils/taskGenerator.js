const tasks = [
  {
    id: 0,
    name: "Home Design",
    description: "House drawings",
    duration: 2,
  },
  {
    id: 1,
    name: "Site Preparation",
    description:
      "depending on your site, site works may involve demolishing an existing home or building retaining walls and flattening the ground to prepare it for construction, if required.",
    duration: 2,
  },
  {
    id: 2,
    name: "Foundation",
    description:
      "Once the site is ready, the foundation is laid. The process includes measuring out the design on the site, pouring the footings and installing under-slab drainage, moisture barriers and termite protection.",
    duration: 3,
  },
  {
    id: 3,
    name: "Frame",
    description: "building frames (timber frames are usually quicker).",
    duration: 3,
  },
  {
    id: 4,
    name: "Internal Wiring and Plumbing",
    description:
      "Electricians and plumbers install essential wiring and pipes for power, water, and gas.",
    duration: 1,
  },
  {
    id: 5,
    name: "External Walls",
    description: "Bricks or Hebel is installed",
    duration: 2,
  },
  {
    id: 6,
    name: "Roofing, Gutters and Cladding",
    description: "Roof sheeting, gutters, cladding and insulation are added.",
    duration: 1,
  },
  {
    id: 7,
    name: "Lock-up",
    description:
      "this is the stage when all your doors and windows can be locked.",
    duration: 2,
  },
  {
    id: 8,
    name: "Fit-Out",
    description:
      "electrical (including lights and powerpoints) and other fixtures and fittings including kitchen, laundry and bathroom cabinets and benchtops, tiling, tapware, mirrors, basins, baths and shower screens will be installed.",
    duration: 6,
  },
  {
    id: 9,
    name: "Practical Completion",
    description: "all painting, installations and detailing are completed",
    duration: 2,
  },
];

const taskGenerator = (
  startDate,
  projectId,
  councilApproval,
) => {

  const tasksArray = [];
  const startDateString = new Date(startDate);
  let lastDate;
  let endDate;
  for (let i = 0; i < tasks.length; i++) {
    if (councilApproval === true) {
      if (i === 1) {
        lastDate = startDateString;
        endDate = new Date(lastDate);
        endDate.setDate(endDate.getDate() + tasks[i].duration * 7);

        let taskObj = {
          name: tasks[i].name,
          description: tasks[i].description,
          startDate: lastDate,
          endDate: endDate,
          projectId: projectId,
        };
        lastDate = endDate;
        tasksArray.push(taskObj);
      } else if (i > 1) {
        endDate = new Date(lastDate);
        endDate.setDate(endDate.getDate() + tasks[i].duration * 7);

        let taskObj = {
          name: tasks[i].name,
          description: tasks[i].description,
          startDate: lastDate,
          endDate: endDate,
          projectId: projectId,
        };
        lastDate = endDate;
        tasksArray.push(taskObj);
      }
    } else {
      if (i === 0) {
        lastDate = startDateString;
        endDate = new Date(lastDate);
        endDate.setDate(endDate.getDate() + tasks[i].duration * 7);

        let taskObj = {
          name: tasks[i].name,
          description: tasks[i].description,
          startDate: lastDate,
          endDate: endDate,
          projectId: projectId,
        };
        lastDate = endDate;
        tasksArray.push(taskObj);
      } else {
        endDate = new Date(lastDate);
        endDate.setDate(endDate.getDate() + tasks[i].duration * 7);

        let taskObj = {
          name: tasks[i].name,
          description: tasks[i].description,
          startDate: lastDate,
          endDate: endDate,
          projectId: projectId,
        };
        lastDate = endDate;
        tasksArray.push(taskObj);
      }
    }
  }
  console.log(tasksArray);
};

module.exports = taskGenerator;
