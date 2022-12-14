import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { GlobalContainer } from "./styles/GlobalContainer.styled";

import auth from "./utils/auth";

import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import HeaderMinimal from "./components/HeaderMinimal";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import FooterMinimal from "./components/FooterMinimal";
import NewProject from "./pages/NewProject";
import NewTask from "./pages/NewTask";
import NewTeam from "./pages/NewTeam";
import Project from "./pages/Project";
import EditProject from "./pages/EditProject";
import EditTeammate from "./pages/EditTeammate";
import ProtectedRoute from "./components/ProtectedRoute";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENCE_KEY);

const lightTheme = {
  colors: {
    body: "white",
    color: "hsl(192, 100%, 9%)",
    lightBlue: "#8ECAE6",
    yellow: "#FFB703",
    darkBlue: "#023047",
    orange: "#FB8500",
    midBlue: "#219EBC",
    textFade: "hsl(192, 41%, 9%)",
  },
  mobile: "768px",
};

const darkTheme = {
  colors: {
    body: "#0f0f0f",
    color: "white",
    lightBlue: "#6e818a",
    yellow: "#FFB703",
    darkBlue: "#023047",
    orange: "#FB8500",
    midBlue: "#219EBC",
    textFade: "#e8e8e8",
  },
  mobile: "768px",
};

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [themeIcon, setThemeIcon] = useState(<>&#9788;</>);
  const [minimalSize, setMinimalSize] = useState(false);

  const savedTheme = JSON.parse(localStorage.getItem("theme"));

  useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme.theme);
      setThemeIcon(savedTheme.themeIcon.props.children);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setThemeIcon(<>&#9789;</>);
      const themeObject = {
        theme: darkTheme,
        themeIcon: <>&#9789;</>,
      };
      window.localStorage.setItem("theme", JSON.stringify(themeObject));
    } else {
      setTheme(lightTheme);
      setThemeIcon(<>&#9788;</>);
      const themeObject = {
        theme: lightTheme,
        themeIcon: <>&#9788;</>,
      };
      window.localStorage.setItem("theme", JSON.stringify(themeObject));
    }
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <GlobalContainer>
            {minimalSize ? (
              <HeaderMinimal toggleTheme={toggleTheme} themeIcon={themeIcon} />
            ) : (
              <Header toggleTheme={toggleTheme} themeIcon={themeIcon} />
            )}

            <Routes>
              <Route
                path="/"
                element={<Landing setMinimalSize={setMinimalSize} />}
              />

              <Route
                path="/login"
                element={<Login setMinimalSize={setMinimalSize} />}
              />
              <Route
                path="/signup"
                element={<Signup setMinimalSize={setMinimalSize} />}
              />
              {auth.loggedIn() && (
                <>
                  <Route
                    path="/dashboard"
                    element={<Dashboard setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/new-project"
                    element={<NewProject setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/new-task/:projectName/:projectId"
                    element={<NewTask setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/new-teammate"
                    element={<NewTeam setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/project/:projectId"
                    element={<Project setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/edit-project/:projectId"
                    element={<EditProject setMinimalSize={setMinimalSize} />}
                  />
                  <Route
                    path="/edit-teammate/:teammateId"
                    element={<EditTeammate setMinimalSize={setMinimalSize} />}
                  />
                </>
              )}

              <Route path="*" element={<NotFound />} />
            </Routes>
            {minimalSize ? <FooterMinimal /> : <Footer />}
          </GlobalContainer>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
