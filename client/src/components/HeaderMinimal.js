import React from "react";

import { Logo, Nav, StyledHeaderMinimal } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { MinimalButton, ThemeButton } from "../styles/Button.styled";
import logo from "../images/logo2.svg";

import Auth from "../utils/auth";
import { Link, useLocation } from "react-router-dom";

const HeaderMinimal = ({ toggleTheme, themeIcon }) => {
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
            <Logo src={logo} />
            {location === "/dashboard" ? (
              <div>
                <MinimalButton
                  onClick={(e) => logout(e)}
                  bg={({ theme }) => theme.colors.yellow}
                >
                  Logout
                </MinimalButton>
                <ThemeButton onClick={() => toggleTheme()}>{themeIcon}</ThemeButton>
              </div>
            ) : (
              <div>
                <Link to="/dashboard">
                  <MinimalButton>Dashboard</MinimalButton>
                </Link>
                <MinimalButton onClick={(e) => logout(e)}>Logout</MinimalButton>
                <ThemeButton onClick={() => toggleTheme()}>{themeIcon}</ThemeButton>
              </div>
            )}
          </Nav>
        </Container>
      ) : (
        <Container>
          <Nav>
            <Logo src={logo} />
            <div>
              <Link to="/">
                <MinimalButton>Home</MinimalButton>
              </Link>
              <ThemeButton onClick={() => toggleTheme()}>{themeIcon}</ThemeButton>
            </div>
          </Nav>
        </Container>
      )}
    </StyledHeaderMinimal>
  );
};

export default HeaderMinimal;
