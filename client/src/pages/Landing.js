import React from "react";
import cardsContent from "../content/cardsContent";

import { Container } from "../styles/Container.styled";
import { StyledCard } from "../styles/Card.styled";

const Landing = () => {
  return (
    <Container>
      {cardsContent.map((card) => (
        <StyledCard layout={card.id % 2 === 0 && "row-reverse"} key={card.id}>
          <div>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>

          <div>
            <img src={`./images/${card.image}`} alt="" />
          </div>
        </StyledCard>
      ))}
    </Container>
  );
};

export default Landing;
