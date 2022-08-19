import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { } from "../utils/mutations";

import Auth from "../utils/auth";
import { Flex } from "../styles/Flex.styled";
import { CenterContainer } from "../styles/Container.styled";
import { FormCard } from "../styles/Card.styled";

import {
  SButton,
  SForm,
  SFormControl,
  SInput,
  SInputWrap,
  SLabel,
  SRange,
  SSelect,
} from "../styles/FormStyle";

const TeamForm = () => {
  const user = Auth.getProfile();
  const [formState, setFormState] = useState({
    name: "",
    role: "",
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
    // try {
    // } catch (e) {
    //   console.error(e);
    // }

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
    <CenterContainer>
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
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Role:</SLabel>
              <SSelect
                name="role"
                value={formState.role}
                onChange={handleChange}
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
          </SForm>
          {/* {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )} */}
        </FormCard>
      </Flex>
    </CenterContainer>
  );
};

export default TeamForm;
