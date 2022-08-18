import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GanttComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-gantt";

import { QUERY_PROJECT } from "../utils/queries";
import { CenterContainer } from "../styles/Container.styled";
import { DashboardCard } from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";

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
      startDate: new Date(projectData.tasks[i].startDate * 1),
      endDate: new Date(projectData.tasks[i].endDate * 1),
      owner: projectData.tasks[i].assigneeId?.name,
    };

    ganttTasks.push(taskObj);
  }

  const taskFields = {
    id: "taskId",
    name: "name",
    startDate: "startDate",
    endDate: "endDate",
    owner: "owner",
  };
  const timelineSettings = {
    timelineViewMode: "Month",
  };

  return (
    <CenterContainer>
      <DashboardCard>
        <h3>{projectData.project.name}</h3>
        <p>
          Address: {projectData.project.address}{" "}
          <Link to={`/new-task/${projectData.project.name}/${projectData.project._id}`}>
            <ProjectButton bg={({ theme }) => theme.colors.lightBlue}>
              Add Task
            </ProjectButton>
          </Link>
        </p>
      </DashboardCard>
      <GanttComponent
        dataSource={ganttTasks}
        height="450px"
        taskFields={taskFields}
        timelineSettings={timelineSettings}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="taskId"
            headerText="Task-Id"
            width="100"
          ></ColumnDirective>
          <ColumnDirective
            field="name"
            headerText="Task Name"
            width="250"
          ></ColumnDirective>
          <ColumnDirective
            field="startDate"
            headerText="Start Date"
            width="100"
          ></ColumnDirective>
          <ColumnDirective
            field="endDate"
            headerText="End Date"
            width="100"
          ></ColumnDirective>
          <ColumnDirective
            field="owner"
            headerText="Assigned Teammate"
            width="200"
          ></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </CenterContainer>
  );
};

export default Project;
