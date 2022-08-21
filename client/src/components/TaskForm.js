import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TASK } from "../utils/mutations";
import { QUERY_TEAM } from "../utils/queries";

import { Flex } from "../styles/Flex.styled";
import { FormCard } from "../styles/Card.styled";

import {
  SButton,
  SForm,
  SFormControl,
  SInput,
  SLabel,
  SSelect,
  SRange,
} from "../styles/FormStyle";

const TaskForm = ({ projectName, projectId }) => {
  const { loading, data } = useQuery(QUERY_TEAM);
  const [addTask, { data: taskData, error }] = useMutation(ADD_TASK);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    startDate: "",
    duration: 1,
    projectId: projectId,
    assigneeId: null,
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "duration") {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { taskData } = await addTask({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: "",
      description: "",
      startDate: "",
      duration: 1,
      projectId: "",
      assigneeId: null,
    });
  };

  if (loading) {
    return <>Loading...</>;
  }

  const teamData = data?.team || false;

  return (
    <Flex>
      <div>
        <h2>Create a New Task.</h2>
        <p>Create a new task for the project {projectName}.</p>
      </div>
      <FormCard>
        <SForm>
          <h4>{projectName}</h4>
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
            <SLabel>Duration (weeks):</SLabel>
            <SRange
              name="duration"
              type="number"
              min="1"
              max="30"
              value={formState.duration}
              onChange={handleChange}
            />
          </SFormControl>
          {teamData && (
            <SFormControl>
              <SLabel>Assign to a teammate</SLabel>
              <SSelect
                name="assigneeId"
                value={formState.assigneeId}
                onChange={handleChange}
              >
                <option value="null">None</option>
                {teamData.map((teammate) => {
                  return (
                    <option key={teammate._id} value={teammate._id}>
                      {teammate.role} - {teammate.name}
                    </option>
                  );
                })}
              </SSelect>
            </SFormControl>
          )}

          <SButton type="button" onClick={handleFormSubmit}>
            Submit
          </SButton>
        </SForm>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </FormCard>
    </Flex>
  );
};

export default TaskForm;
