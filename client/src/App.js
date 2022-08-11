import React, { useContext, useState } from "react";
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

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/Header";

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
    color: "hsl(192, 100%, 9%)"
  },
};

const darkTheme = {
  colors: {
    body: "gray",
    color: "white"
  },
};

function App() {

  const [theme, setTheme] = useState(lightTheme);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
