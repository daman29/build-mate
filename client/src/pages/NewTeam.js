import React from "react";
import TeamForm from "../components/TeamForm";

const NewTeam = (props) => {
  props.setMinimalSize(true);
  return <TeamForm />;
};

export default NewTeam;
