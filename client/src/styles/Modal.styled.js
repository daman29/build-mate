import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  z-index: 98;
  display: flex;
  padding: 5%;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 5000px ${({ theme }) => theme.colors.textFade};
  margin: 40px 0;
  padding: 20px;
  flex-direction: ${({ layout }) => layout || "row"};
  height: auto;
  min-height: 100px;
  min-width: 80vw;
  width: 80%;
  z-index: 99;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
