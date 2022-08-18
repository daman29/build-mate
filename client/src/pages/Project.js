import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";

import { QUERY_PROJECT } from "../utils/queries";
import { CenterContainer } from "../styles/Container.styled";

const GanttData = [
  {
    TaskID: 1,
    TaskName: "Project Initiation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
    subtasks: [
      {
        TaskID: 2,
        TaskName: "Identify Site location",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
      },
      {
        TaskID: 3,
        TaskName: "Perform Soil test",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
      },
      {
        TaskID: 4,
        TaskName: "Soil test approval",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
      },
    ],
  },
  {
    TaskID: 5,
    TaskName: "Project Estimation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
    subtasks: [
      {
        TaskID: 6,
        TaskName: "Develop floor plan for estimation",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
      },
      {
        TaskID: 7,
        TaskName: "List materials",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
      },
      {
        TaskID: 8,
        TaskName: "Estimation approval",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
      },
    ],
  },
];

const Project = (props) => {
  props.setMinimalSize(true);

  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { project: projectId },
  });

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  const projectData = data?.project;
  console.log(projectData);

  const ganttTasks = [];

  for (let i = 0; i < projectData.tasks.length; i++) {
    let taskObj = {
      taskId: i,
      name: projectData.tasks[i].name,
      startDate: projectData.tasks[i].startDate,
      endDate: projectData.tasks[i].endDate,
    };
    ganttTasks.push(taskObj);
  }

  const taskFields = {
    id: "taskId",
    name: "name",
    startDate: "startDate",
    endDate: "endDate",
  };

  return (
    <CenterContainer>
      <GanttComponent
        dataSource={ganttTasks}
        height="450px"
        taskFields={taskFields}
      />
    </CenterContainer>
  );
};

export default Project;
