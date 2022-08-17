import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {} from "../utils/mutations";

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

const ProjectForm = () => {
  const user = Auth.getProfile();
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    startDate: "",
    storeys: 1,
    councilApproval: true,
    owner: user.data._id,
    wallType: "Brick-veneer",
    wallType2nd: "Brick-veneer",
    roofType: "Colorbond",
    structure: "Timber",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "councilApproval") {
      console.log("approval clicked");

      setFormState({
        ...formState,
        [name]: !formState.councilApproval,
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
    // try {
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setFormState({
      name: "",
      address: "",
      startDate: "",
      storeys: 1,
      councilApproval: true,
      owner: user.data._id,
      wallType: "Brick-veneer",
      wallType2nd: "Brick-veneer",
      roofType: "Colorbond",
      structure: "Timber",
    });
  };

  return (
    <CenterContainer>
      <Flex>
        <div>
          <h2>Create a New Project.</h2>
          <p>
            Create a new project using our automated tool to speed up initial
            data entry.
          </p>
        </div>
        <FormCard>
          <SForm>
            <SFormControl>
              <SLabel>Name:</SLabel>
              <SInput
                placeholder="Project name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Address:</SLabel>
              <SInput
                placeholder="Project address"
                name="address"
                type="text"
                value={formState.address}
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
              <SLabel>Storeys:</SLabel>
              <SRange
                name="storeys"
                type="number"
                min="1"
                max="2"
                value={formState.storeys}
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>Do you have council approval?:</SLabel>
              <SInput
                name="councilApproval"
                type="checkbox"
                value="Approval"
                defaultChecked="true"
                onChange={handleChange}
              />
            </SFormControl>
            <SFormControl>
              <SLabel>
                {formState.storeys === "2"
                  ? "Wall Type First Storey:"
                  : "Wall Type:"}
              </SLabel>
              <SSelect
                name="wallType"
                value={formState.wallType}
                onChange={handleChange}
              >
                <option value="Brick-veneer">Brick-veneer</option>
                <option value="Hebel">Hebel</option>
                <option value="Double brick">Double brick</option>
              </SSelect>
            </SFormControl>
            {formState.storeys === "2" && (
              <SFormControl>
                <SLabel>Wall Type Second Storey:</SLabel>
                <SSelect
                  name="wallType2nd"
                  value={formState.wallType2nd}
                  onChange={handleChange}
                >
                  <option value="Brick-veneer">Brick-veneer</option>
                  <option value="Hebel">Hebel</option>
                  <option value="Double brick">Double brick</option>
                </SSelect>
              </SFormControl>
            )}
            <SFormControl>
              <SLabel>Roof Type:</SLabel>
              <SSelect
                name="roofType"
                value={formState.roofType}
                onChange={handleChange}
              >
                <option value="Colorbond">Colorbond</option>
                <option value="Tile">Tile</option>
              </SSelect>
            </SFormControl>
            <SFormControl>
              <SLabel>Structure:</SLabel>
              <SSelect
                name="structure"
                value={formState.structure}
                onChange={handleChange}
              >
                <option value="Timber">Timber</option>
                <option value="Steel">Steel</option>
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
    </CenterContainer>
  );
};

export default ProjectForm;
