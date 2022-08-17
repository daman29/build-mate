import React from "react";
import cardsContent from "../content/cardsContent";

import { CenterContainer } from "../styles/Container.styled";
import Card from "../components/Card";

const Landing = ({ setMinimalSize }) => {
  setMinimalSize(false);
  return (
    <CenterContainer>
      {cardsContent.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </CenterContainer>
  );
};

export default Landing;
