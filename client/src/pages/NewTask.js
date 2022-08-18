import React from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const NewTask = (props) => {
  props.setMinimalSize(true);
  const { projectName, projectId } = useParams();
  return <TaskForm projectIdd={projectId} projectName={projectName} />;
};

export default NewTask;
