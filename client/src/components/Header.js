import React from "react";

import { Nav, StyledHeader, Image, Logo } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button, MinimalButton } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";

import headerImage from "../images/header.jpg";

import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import logo from "../images/logo2.svg";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <StyledHeader>
      {Auth.loggedIn() ? (
        <Container>
          <Nav>
            <Logo src={logo} />
            <Link to="/">
              <Button>Dashboard</Button>
            </Link>
            <MinimalButton
              onClick={(e) => logout(e)}
              bg={({ theme }) => theme.colors.yellow}
            >
              Logout
            </MinimalButton>
          </Nav>
        </Container>
      ) : (
        <Container>
          <Nav>
            <Logo src={logo} />
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Nav>
          <Flex>
            <div>
              <h2>Build your dream project the right way!</h2>
              <p></p>
              <Link to="/signup">
                <Button
                  bg={({ theme }) => theme.colors.yellow}
                  color={({ theme }) => theme.colors.color}
                >
                  Get Started
                </Button>
              </Link>
            </div>
            <Image src={headerImage} />
          </Flex>
        </Container>
      )}
    </StyledHeader>
  );
};

export default Header;
