import React from "react";
import TeamForm from "../components/TeamForm";
import { CenterContainer } from "../styles/Container.styled";

const EditTeammate = (props) => {
  props.setMinimalSize(true);
  return (
    <CenterContainer>
      <TeamForm />
    </CenterContainer>
  );
};

export default EditTeammate;
