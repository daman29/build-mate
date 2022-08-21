import { useState } from "react";
import { useParams} from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ASSIGN_TEAMMATE } from "../utils/mutations";
import {
  GanttComponent,
  ColumnDirective,
  ColumnsDirective,
  Selection,
  Inject,
} from "@syncfusion/ej2-react-gantt";
import TeamModal from "../components/TeamModal";
import TaskModal from "../components/TaskModal";

import { QUERY_PROJECT, QUERY_TEAM } from "../utils/queries";
import { CenterContainer } from "../styles/Container.styled";
import { DashboardCard } from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";
import { GanttFlex } from "../styles/Gantt.styled";

const Project = (props) => {
  props.setMinimalSize(true);

  const [teamModal, setTeamModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [currentTask, setCurrentTask] = useState("");

  const { projectId } = useParams();

  const [assignTeammate, { data: mutationData }] = useMutation(ASSIGN_TEAMMATE);

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { project: projectId },
  });

  const { loading: loadingTeam, data: dataTeam } = useQuery(QUERY_TEAM);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (loadingTeam) {
    return <h1>Loading ...</h1>;
  }

  const projectData = data?.project;
  const teamData = dataTeam?.team;

  const ganttTasks = [];

  for (let i = 0; i < projectData.tasks.length; i++) {
    let taskObj = {
      taskId: i,
      name: projectData.tasks[i].name,
      startDate: new Date(projectData.tasks[i].startDate * 1),
      endDate: new Date(projectData.tasks[i].endDate * 1),
      owner: projectData.tasks[i].assigneeId?.name,
      _id: projectData.tasks[i]._id,
    };

    ganttTasks.push(taskObj);
  }

  const taskFields = {
    id: "taskId",
    name: "name",
    startDate: "startDate",
    endDate: "endDate",
    owner: "owner",
    _id: "_id",
  };
  const timelineSettings = {
    timelineViewMode: "Month",
  };

  const handleAssignClick = async (teamId) => {
    try {
      console.log(currentTask, teamId);
      const { mutationData } = await assignTeammate({
        variables: { taskId: currentTask, assigneeId: teamId },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (args) => {
    setCurrentTask(args.data.taskData._id);
    setTeamModal(!teamModal);
  };

  return (
    <CenterContainer>
      {teamModal && (
        <TeamModal
          teamModal={teamModal}
          setTeamModal={setTeamModal}
          teamData={teamData}
          handleAssignClick={handleAssignClick}
        />
      )}
      {taskModal && (
        <TaskModal
          taskModal={taskModal}
          setTaskModal={setTaskModal}
          projectName={projectData.project.name}
          projectId={projectData.project._id}
        />
      )}
      <DashboardCard>
        <h3>{projectData.project.name}</h3>
        <p>
          Address: {projectData.project.address}
          <ProjectButton
            bg={({ theme }) => theme.colors.lightBlue}
            onClick={() => setTaskModal(true)}
          >
            Add Task
          </ProjectButton>
        </p>
      </DashboardCard>
      <GanttFlex>
        <GanttComponent
          dataSource={ganttTasks}
          height="450px"
          width="100%"
          taskFields={taskFields}
          timelineSettings={timelineSettings}
          rowSelected={openModal}
        >
          <Inject services={[Selection]}></Inject>
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
      </GanttFlex>
    </CenterContainer>
  );
};

export default Project;
