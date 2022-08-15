import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/Header";
import HeaderMinimal from "./components/HeaderMinimal";
import Auth from "./utils/auth";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import FooterMinimal from "./components/FooterMinimal";

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
    body: "gray",
    color: "white",
    lightBlue: "#8ECAE6",
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
  const [minimalSize, setMinimalSize] = useState(false);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <GlobalContainer>
            {minimalSize ? (
              <HeaderMinimal theme={theme} />
            ) : (
              <Header theme={theme} />
            )}

            <Routes>
              <Route
                path="/"
                element={<Landing setMinimalSize={setMinimalSize} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/login"
                element={<Login setMinimalSize={setMinimalSize} />}
              />
              <Route
                path="/signup"
                element={<Signup setMinimalSize={setMinimalSize} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {minimalSize ? (
              <FooterMinimal theme={theme} />
            ) : (
              <Footer theme={theme} />
            )}
          </GlobalContainer>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
