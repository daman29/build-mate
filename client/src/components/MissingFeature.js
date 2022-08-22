import { Background, StyledModal } from "../styles/Modal.styled";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

const MissingFeature = ({ missingFeature, setMissingFeature }) => {

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: missingFeature ? 1 : 0,
    transform: missingFeature ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setMissingFeature(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && missingFeature) {
        setMissingFeature(false);
      }
    },
    [setMissingFeature, missingFeature]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {missingFeature ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <StyledModal>
              <h2>Sadly the feature you are trying to access is currently under-development.</h2>
              <p>Please feel free to reach out to me on <a href="mailto:damneet.sambhy@hotmail.com" target="_blank" rel="noreferrer">damneet.sambhy@hotmail.com</a> or <a href="https://github.com/daman29" target="_blank" rel="noreferrer">GitHub</a></p>
            </StyledModal>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default MissingFeature;
