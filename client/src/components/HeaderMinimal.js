import React from "react";

import { Nav, StyledHeaderMinimal} from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";

import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const HeaderMinimal = ({ theme }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <StyledHeaderMinimal>
      {Auth.loggedIn() ? (
        <Container>
          <Nav>
            <h1>Build Mate</h1>
            <Link to="/">
              <Button>Dashboard</Button>
            </Link>
          </Nav>
        </Container>
      ) : (
        <Container>
          <Nav>
            <h1>Build Mate</h1>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </Nav>
        </Container>
      )}
    </StyledHeaderMinimal>
  );
};

export default HeaderMinimal;
