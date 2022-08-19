import { Background, StyledModal } from "../styles/Modal.styled";
import { useRef, useEffect, useCallback } from "react";
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

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setTeamModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && teamModal) {
        setTeamModal(false);
      }
    },
    [setTeamModal, teamModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {teamModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <StyledModal></StyledModal>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default TeamModal;
