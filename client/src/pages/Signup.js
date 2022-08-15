import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Flex } from "../styles/Flex.styled";
import { Container } from "../styles/Container.styled";
import { FormCard } from "../styles/Card.styled";

import {
  SButton,
  SForm,
  SFormControl,
  SInput,
  SLabel,
} from "../styles/FormStyle";

import Auth from "../utils/auth";

const Signup = ({setMinimalSize}) => {
  setMinimalSize(true)
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Flex>
        <div>
          <h2>Sign up to continue.</h2>
          <p>Welcome to Build Mate, your dream projects are waiting for you. Sign up and take your work to the next level.</p>
        </div>
        <FormCard>
          <SForm>
            <SFormControl>
              <SLabel>Username:</SLabel>
              <SInput
                placeholder="Your username"
                name="username"
                type="username"
                value={formState.username}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Email:</SLabel>
              <SInput
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Password:</SLabel>
              <SInput
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </SFormControl>
            <SButton type="button" onClick={handleFormSubmit}>
              Submit
            </SButton>
          </SForm>
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </FormCard>
      </Flex>
    </Container>
  );
};

export default Signup;
