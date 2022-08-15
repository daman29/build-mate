import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};
  img {
    margin-left: 10%;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const FormCard = styled(StyledCard)`
  border: 1px solid ${({ theme }) => theme.colors.midBlue};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.midBlue};
`;
