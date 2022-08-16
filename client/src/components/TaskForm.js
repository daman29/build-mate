import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {} from "../utils/mutations";
import { QUERY_TEAM } from "../utils/queries";

import Auth from "../utils/auth";
import { Flex } from "../styles/Flex.styled";
import { Container } from "../styles/Container.styled";
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

const TaskForm = () => {
  const user = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_TEAM);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    projectId: "",
    assigneeId: "",
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
      description: "",
      startDate: "",
      endDate: "",
      projectId: "",
      assigneeId: "",
    });
  };

  if (loading) {
    return <>Loading...</>;
  }

  //   if (!loading) {
  //     console.log(data.team);
  //   }

  const teamData = data?.team || {};

  console.log(teamData);

  return (
    <Container>
      <Flex>
        <div>
          <h2>Create a New Task.</h2>
          <p>Create a new task for the project x.</p>
        </div>
        <FormCard>
          <SForm>
            <h4>Project X</h4>
            <SFormControl>
              <SLabel>Name:</SLabel>
              <SInput
                placeholder="Task name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Description:</SLabel>
              <SInput
                placeholder="Task description"
                name="description"
                type="text"
                value={formState.description}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Start Date:</SLabel>
              <SInput
                name="startDate"
                type="date"
                value={formState.startDate}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>End Date:</SLabel>
              <SInput
                name="endDate"
                type="date"
                value={formState.endDate}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Assign to a teammate</SLabel>
              <SSelect
                name="assigneeId"
                value={formState.assigneeId}
                onChange={handleChange}
              >
                {teamData.map((teammate) => {
                  return <option key={teammate._id} value={teammate._id}>
                    {teammate.role} - {teammate.name}
                  </option>;
                })}
              </SSelect>
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
    </Container>
  );
};

export default TaskForm;
