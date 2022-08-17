import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_DASHBOARD } from "../utils/queries";

import { Container } from "../styles/Container.styled";
import {
  FlexDashboard,
  LeftColumn,
  RightColumn,
} from "../styles/Dashboard.styled";
import {
  CategoryCard,
  DashboardCard,
} from "../styles/Card.styled";
import ProjectCardComponent from "../components/ProjectCardComponent";
import Auth from "../utils/auth";
import TeammateCardComponent from "../components/TeammateCardComponent";

const Dashboard = ({ setMinimalSize }) => {
  const { loading, data } = useQuery(QUERY_DASHBOARD);
  setMinimalSize(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const dashboardData = data?.profile;
  const user = Auth.getProfile();

  console.log(dashboardData);

  return (
    <Container>
      <h2>Good Day {user.data.username}!</h2>
      <FlexDashboard>
        <LeftColumn>
          <CategoryCard>
            <h4>Quick Links:</h4>
            <Link to="/projects">
              <h5>Projects</h5>
            </Link>
            <Link to="/team">
              <h5>Team</h5>
            </Link>
            <Link to="/team">
              <h5>Quotes</h5>
            </Link>
            <Link to="/team">
              <h5>Edit Profile</h5>
            </Link>
          </CategoryCard>
        </LeftColumn>
        <RightColumn>
          <DashboardCard>
            <h4>Your Projects:</h4>
            {dashboardData.projects.map((project) => (
              <ProjectCardComponent key={project._id} project={project} />
            ))}
          </DashboardCard>
          <DashboardCard>
            <h4>Your Team:</h4>
            {dashboardData.team.map((teammate) => (
              <TeammateCardComponent teammate={teammate} />
            ))}
          </DashboardCard>
        </RightColumn>
      </FlexDashboard>
    </Container>
  );
};

export default Dashboard;
