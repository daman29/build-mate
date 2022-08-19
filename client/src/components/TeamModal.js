import { StyledModal } from "../styles/Modal.styled";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";

const TeamModal = ({ teamModal, setTeamModal, teamData }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: teamModal ? 1 : 0,
    transform: teamModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {teamModal ? (
        <animated.div style={animation}>
          <StyledModal></StyledModal>
        </animated.div>
      ) : null}
    </>
  );
};

export default TeamModal;
