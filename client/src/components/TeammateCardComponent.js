import { TeammateCard } from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeammateCardComponent = ({ teammate }) => {
  return (
    <TeammateCard>
      <h5>{teammate.role}</h5>
      <div>
        <h6>{teammate.name}</h6>
        <Link to="/home">
          <ProjectButton bg={({ theme }) => theme.colors.orange}>
            <FaPhone />
          </ProjectButton>
        </Link>
        <Link to="/home">
          <ProjectButton bg={({ theme }) => theme.colors.orange}>
            <FaEnvelope />
          </ProjectButton>
        </Link>
        <Link to="/home">
          <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
            Edit
          </ProjectButton>
        </Link>
      </div>
    </TeammateCard>
  );
};

export default TeammateCardComponent;
