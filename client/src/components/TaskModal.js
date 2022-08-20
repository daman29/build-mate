import { Background, StyledModal } from "../styles/Modal.styled";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import TaskForm from "./TaskForm";

const TaskModal = ({ taskModal, setTaskModal, projectName, projectId }) => {
  console.log(projectId, projectName);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: taskModal ? 1 : 0,
    transform: taskModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setTaskModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && taskModal) {
        setTaskModal(false);
      }
    },
    [setTaskModal, taskModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {taskModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <StyledModal>
              <TaskForm projectName={projectName} projectId={projectId} />
            </StyledModal>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default TaskModal;
