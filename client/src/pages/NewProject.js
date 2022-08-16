import React from "react";
import ProjectForm from "../components/ProjectForm";

const NewProject = (props) => {
  props.setMinimalSize(true);
  return <ProjectForm />;
};

export default NewProject;
