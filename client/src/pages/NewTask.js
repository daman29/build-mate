import React from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { CenterContainer } from "../styles/Container.styled";

const NewTask = (props) => {
  props.setMinimalSize(true);
  const { projectName, projectId } = useParams();
  return (
    <CenterContainer>
      <TaskForm projectIdd={projectId} projectName={projectName} />
    </CenterContainer>
  );
};

export default NewTask;
