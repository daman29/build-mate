import { StyledCard } from "../styles/Card.styled";

const Card = ({ card }) => {
  return (
    <StyledCard layout={card.id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{card.title}</h2>
        <p>{card.body}</p>
      </div>

      <div>
        <img src={card.image} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
