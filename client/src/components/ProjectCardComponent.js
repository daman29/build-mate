import { ProjectCard } from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SSpan = styled.span`
  font-size: 0.6em;
`;

const ProjectCardComponent = ({ project }) => {
  const projectLink = "/project/" + project._id;
  const editLink = "/edit-project/" + project._id;

  return (
    <ProjectCard>
      <h5>
        {project.name} <SSpan>{project.address}</SSpan>
      </h5>
      <div>
        <Link to={projectLink}>
          <ProjectButton bg={({ theme }) => theme.colors.orange}>
            Open
          </ProjectButton>
        </Link>
        <Link to={editLink}>
          <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
            Edit
          </ProjectButton>
        </Link>
      </div>
    </ProjectCard>
  );
};

export default ProjectCardComponent;
