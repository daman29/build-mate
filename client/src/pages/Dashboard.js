import React from "react";
import { Container } from "../styles/Container.styled";

const Dashboard = ({ setMinimalSize }) => {
  setMinimalSize(true);
  return <Container>Dashboard</Container>;
};

export default Dashboard;
