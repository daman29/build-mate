import React from "react";
import ProjectForm from "../components/ProjectForm";
import { CenterContainer } from "../styles/Container.styled";

const NewProject = (props) => {
  props.setMinimalSize(true);
  return (
    <CenterContainer>
      <ProjectForm />
    </CenterContainer>
  );
};

export default NewProject;
