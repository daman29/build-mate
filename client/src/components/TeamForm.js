import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TEAM } from "../utils/mutations";

import Auth from "../utils/auth";
import { Flex } from "../styles/Flex.styled";
import { FormCard } from "../styles/Card.styled";
import { checkNumber } from "../utils/helpers";

import {
  SButton,
  SForm,
  SFormControl,
  SInput,
  SLabel,
  SSelect,
} from "../styles/FormStyle";

const TeamForm = () => {
  const user = Auth.getProfile();
  const [addTeam, { data, error }] = useMutation(ADD_TEAM);
  const [inputError, setInputError] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    role: "Bricky",
    phoneNumber: "",
    email: "",
    teamLeadId: user.data._id,
  });

  // update state based on form input changes
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

    if (!checkNumber(formState.phoneNumber)) {
      setInputError("Please check that the phone number is valid");
      return;
    }

    try {
      const { data } = await addTeam({
        variables: { ...formState },
      });
      window.location.replace("/dashboard");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: "",
      role: "",
      phoneNumber: "",
      email: "",
      teamLeadId: user.data._id,
    });
  };

  return (
    <Flex>
      <div>
        <h2>Create a New Teammate.</h2>
        <p>Create a new teammate for your high performing team.</p>
      </div>
      <FormCard>
        <SForm>
          <SFormControl>
            <SLabel>Name:</SLabel>
            <SInput
              placeholder="Teammate name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </SFormControl>
          <SFormControl>
            <SLabel>Role:</SLabel>
            <SSelect
              name="role"
              value={formState.role}
              onChange={handleChange}
              required
            >
              <option value="Bricky">Bricky</option>
              <option value="Sparky">Sparky</option>
              <option value="Plumber">Plumber</option>
              <option value="Concreter">Concreter</option>
              <option value="Chippy">Chippy</option>
              <option value="Architect">Architect</option>
              <option value="Engineer">Engineer</option>
              <option value="Surveyor">Surveyor</option>
              <option value="Draftsperson">Draftsperson</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Certifier">Certifier</option>
              <option value="Waterproofer">Waterproofer</option>
              <option value="Roofer">Roofer</option>
              <option value="Tiler">Tiler</option>
              <option value="Painter">Painter</option>
              <option value="Landscaper">Landscaper</option>
              <option value="General">General</option>
              <option value="Other">Other</option>
            </SSelect>
          </SFormControl>
          <SFormControl>
            <SLabel>Phone Number:</SLabel>
            <SInput
              placeholder="Teammate phone number"
              name="phoneNumber"
              type="text"
              value={formState.phoneNumber}
              onChange={handleChange}
              required
            />
          </SFormControl>
          <SFormControl>
            <SLabel>Email:</SLabel>
            <SInput
              placeholder="teammateEmail@email.com"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </SFormControl>

          <SButton type="button" onClick={handleFormSubmit}>
            Submit
          </SButton>
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
          {inputError && (
            <div className="my-3 p-3 bg-danger text-white">{inputError}</div>
          )}
        </SForm>
      </FormCard>
    </Flex>
  );
};

export default TeamForm;
