import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { Flex } from "../styles/Flex.styled";
import { CenterContainer } from "../styles/Container.styled";
import { FormCard } from "../styles/Card.styled";

import {
  SButton,
  SForm,
  SFormControl,
  SInput,
  SLabel,
} from "../styles/FormStyle";

const Login = (props) => {
  props.setMinimalSize(true);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <CenterContainer>
      <Flex>
        <div>
          <h2>Sign in to continue.</h2>
          <p>Welcome back to Build Mate. Your projects are waiting for you.</p>
        </div>
        <FormCard>
          <SForm>
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
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </FormCard>
      </Flex>
    </CenterContainer>
  );
};

export default Login;
