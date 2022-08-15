import React from "react";

import { Nav, StyledHeader, Image } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";

import headerImage from "../images/header.jpg";

import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Header = ({ theme }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <StyledHeader>
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
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Nav>
          <Flex>
            <div>
              <h2>Build your dream project the right way!</h2>
              <p></p>
              <Link to="/signup">
                <Button bg={theme.colors.yellow} color="black">
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
