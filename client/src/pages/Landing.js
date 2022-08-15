import React from "react";
import cardsContent from "../content/cardsContent";

import { Container } from "../styles/Container.styled";
import Card from "../components/Card";

const Landing = ({ setMinimalSize }) => {
  setMinimalSize(false);
  return (
    <Container>
      {cardsContent.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </Container>
  );
};

export default Landing;
