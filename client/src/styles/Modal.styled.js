import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 20px;
  flex-direction: ${({ layout }) => layout || "row"};
  height: auto;
  width: 80vw;
  z-index: 99;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
