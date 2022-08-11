import React from "react";
import { Link } from "react-router-dom";

import { Logo, Nav, StyledHeader, Button } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <StyledHeader>
      <Container>
        <Nav>
            <Logo></Logo>
            <Button>Sign up now!</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
