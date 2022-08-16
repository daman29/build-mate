import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import { Container } from "../styles/Container.styled";
import {
  FlexDashboard,
  LeftColumn,
  RightColumn,
} from "../styles/Dashboard.styled";
import {
  CategoryCard,
  DashboardCard,
  ProjectCard,
  TeammateCard,
} from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";

const Dashboard = ({ setMinimalSize }) => {
  setMinimalSize(true);
  return (
    <Container>
      <h2>Welcome back User!</h2>
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
            <ProjectCard>
              <h5>Project 1</h5>
              <div>
                <ProjectButton bg={({ theme }) => theme.colors.orange}>
                  Open
                </ProjectButton>
                <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
                  Edit
                </ProjectButton>
              </div>
            </ProjectCard>
            <ProjectCard>
              <h5>Project 2</h5>
              <div>
                <ProjectButton bg={({ theme }) => theme.colors.orange}>
                  Open
                </ProjectButton>
                <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
                  Edit
                </ProjectButton>
              </div>
            </ProjectCard>
          </DashboardCard>
          <DashboardCard>
            <h4>Your Team:</h4>
            <TeammateCard>
              <h5>Bricky</h5>
              <div>
                <h6>James May</h6>
                <ProjectButton bg={({ theme }) => theme.colors.orange}>
                  <FaPhone />
                </ProjectButton>
                <ProjectButton bg={({ theme }) => theme.colors.orange}>
                  <FaEnvelope />
                </ProjectButton>
                <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
                  Edit
                </ProjectButton>
              </div>
            </TeammateCard>
          </DashboardCard>
        </RightColumn>
      </FlexDashboard>
    </Container>
  );
};

export default Dashboard;
