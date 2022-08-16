import React from "react";
import TaskForm from "../components/TaskForm";

const NewTask = (props) => {
  props.setMinimalSize(true);
  return <TaskForm />;
};

export default NewTask;
