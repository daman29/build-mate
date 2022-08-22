import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_DASHBOARD } from "../utils/queries";

import { CenterContainer } from "../styles/Container.styled";
import {
  FlexDashboard,
  LeftColumn,
  RightColumn,
} from "../styles/Dashboard.styled";
import { CategoryCard, DashboardCard } from "../styles/Card.styled";
import ProjectCardComponent from "../components/ProjectCardComponent";
import Auth from "../utils/auth";
import TeammateCardComponent from "../components/TeammateCardComponent";
import { ProjectButton } from "../styles/Button.styled";
import styled from "styled-components";
import MissingFeature from "../components/MissingFeature";

const StyledHeading = styled.h2`
  text-align: center;
`;

const Dashboard = ({ setMinimalSize }) => {
  const { loading, data } = useQuery(QUERY_DASHBOARD);
  const [missingFeature, setMissingFeature] = useState(false);
  setMinimalSize(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const dashboardData = data?.profile;
  const user = Auth.getProfile();

  return (
    <CenterContainer>
      {missingFeature && (
        <MissingFeature
          missingFeature={missingFeature}
          setMissingFeature={setMissingFeature}
        />
      )}
      <StyledHeading>
        Good Day {user.data.username}! Here is your dashboard.
      </StyledHeading>
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
            <h4>
              Your Projects:{" "}
              <Link to="/new-project">
                <ProjectButton bg={({ theme }) => theme.colors.lightBlue}>
                  New Project
                </ProjectButton>
              </Link>
            </h4>
            {dashboardData.projects.map((project) => (
              <ProjectCardComponent
                key={project._id}
                project={project}
                setMissingFeature={setMissingFeature}
              />
            ))}
          </DashboardCard>
          <DashboardCard>
            <h4>
              Your Team:{" "}
              <Link to="/new-teammate">
                <ProjectButton bg={({ theme }) => theme.colors.lightBlue}>
                  New Teammate
                </ProjectButton>
              </Link>
            </h4>
            {dashboardData.team.map((teammate) => (
              <TeammateCardComponent
                key={teammate._id}
                teammate={teammate}
                setMissingFeature={setMissingFeature}
              />
            ))}
          </DashboardCard>
        </RightColumn>
      </FlexDashboard>
    </CenterContainer>
  );
};

export default Dashboard;
