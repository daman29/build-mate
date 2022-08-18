import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";

import { QUERY_PROJECT } from "../utils/queries";
import { CenterContainer } from "../styles/Container.styled";

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
    const duration =
      (projectData.tasks[i].endDate - projectData.tasks[i].startDate) / 1000;
    let taskObj = {
      taskId: i,
      name: projectData.tasks[i].name,
      startDate: new Date(projectData.tasks[i].startDate*1),
      endDate: new Date(projectData.tasks[i].endDate*1),
    };

    console.log(duration)

    ganttTasks.push(taskObj);
  }

  const taskFields = {
    id: "taskId",
    name: "name",
    startDate: "startDate",
    endDate: "endDate",
  };
  const timelineSettings ={
    timelineViewMode: "Week"
  }

  return (
    <CenterContainer>
      <GanttComponent
        dataSource={ganttTasks}
        height="450px"
        taskFields={taskFields}
        timelineSettings={timelineSettings}
      />
    </CenterContainer>
  );
};

export default Project;
