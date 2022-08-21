import React from "react";
import { useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import { CenterContainer } from "../styles/Container.styled";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";

const EditProject = (props) => {
  props.setMinimalSize(true);
  const {projectId} = useParams();
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { project: projectId },
  });

  if(loading){
    <CenterContainer>
      <h1>Loading...</h1>
    </CenterContainer>
  }

  const projectData = data?.project || {}

  return (
    <CenterContainer>
      <ProjectForm projectData={projectData}/>
    </CenterContainer>
  );
};

export default EditProject;
