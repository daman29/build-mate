import React from "react";

import { Logo, Nav, StyledHeaderMinimal } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import logo from '../images/logo2.svg'

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
            <Logo src={logo}/>
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
          <Logo src={logo}/>
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
