import React from "react";

import { Nav, StyledHeaderMinimal } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";

import Auth from "../utils/auth";
import { Link, useLocation } from "react-router-dom";

const HeaderMinimal = () => {
  const location = useLocation().pathname;
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
            {location === "/dashboard" ? (
              <Button onClick={(e) => logout(e)} bg={({theme}) => theme.colors.yellow}>Logout</Button>
            ) : (
              <div>
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Button onClick={(e) => logout(e)}>Logout</Button>
              </div>
            )}
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
