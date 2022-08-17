import React from "react";

import { Logo, Nav, StyledHeaderMinimal } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button, MinimalButton } from "../styles/Button.styled";
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
              <MinimalButton onClick={(e) => logout(e)} bg={({theme}) => theme.colors.yellow}>Logout</MinimalButton>
            ) : (
              <div>
                <Link to="/dashboard">
                  <MinimalButton>Dashboard</MinimalButton>
                </Link>
                <MinimalButton onClick={(e) => logout(e)}>Logout</MinimalButton>
              </div>
            )}
          </Nav>
        </Container>
      ) : (
        <Container>
          <Nav>
          <Logo src={logo}/>
            <Link to="/">
              <MinimalButton>Home</MinimalButton>
            </Link>
          </Nav>
        </Container>
      )}
    </StyledHeaderMinimal>
  );
};

export default HeaderMinimal;
