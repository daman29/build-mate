import React from "react";
import { Link } from "react-router-dom";

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
} from "../styles/Card.styled";
import { Button } from "../styles/Button.styled";

const Dashboard = ({ setMinimalSize }) => {
  setMinimalSize(true);
  return (
    <Container>
      <FlexDashboard>
        <LeftColumn>
          <CategoryCard>
            <h4>Dashboard:</h4>
            <Link to="/projects">Projects</Link>
          </CategoryCard>
        </LeftColumn>
        <RightColumn>
          <DashboardCard>
            <h4>Your Projects:</h4>
            <ProjectCard>
              <h5>Project 1</h5>
              <div>
                <Button>Open</Button>
                <Button>Edit</Button>
              </div>
            </ProjectCard>
            <ProjectCard>
              <h5>Project 2</h5>
              <div>
                <Button>Open</Button>
                <Button>Edit</Button>
              </div>
            </ProjectCard>
          </DashboardCard>
          <DashboardCard>
            <h4>Your Team:</h4>
          </DashboardCard>
        </RightColumn>
      </FlexDashboard>
    </Container>
  );
};

export default Dashboard;
