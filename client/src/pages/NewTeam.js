import React from "react";
import TeamForm from "../components/TeamForm";
import { CenterContainer } from "../styles/Container.styled";

const NewTeam = (props) => {
  props.setMinimalSize(true);
  return (
    <CenterContainer>
      <TeamForm />
    </CenterContainer>
  );
};

export default NewTeam;
