import { TeammateCard } from "../styles/Card.styled";
import { ProjectButton } from "../styles/Button.styled";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeammateCardComponent = ({ teammate, modal, handleAssignClick }) => {
  return (
    <TeammateCard>
      <h5>{teammate.role}</h5>
      <div>
        <h6>{teammate.name}</h6>

        {modal ? (
          <ProjectButton bg={({ theme }) => theme.colors.midBlue} onClick={() => handleAssignClick(teammate._id)}>
            Assign
          </ProjectButton>
        ) : (
          <>
            <a href={`tel:${teammate.phoneNumber}`}>
              <ProjectButton bg={({ theme }) => theme.colors.orange}>
                <FaPhone />
              </ProjectButton>
            </a>
            <a href={`mailto:${teammate.email}`}>
              <ProjectButton bg={({ theme }) => theme.colors.orange}>
                <FaEnvelope />
              </ProjectButton>
            </a>
            <Link to="/home">
              <ProjectButton bg={({ theme }) => theme.colors.midBlue}>
                Edit
              </ProjectButton>
            </Link>
          </>
        )}
      </div>
    </TeammateCard>
  );
};

export default TeammateCardComponent;
