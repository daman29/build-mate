import styled from "styled-components";

export const FlexDashboard = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 1 25%;
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 1 1 100%;

  }
`;

export const RightColumn = styled(LeftColumn)`
  flex: 1 1 75%;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 1 1 100%;
  }
`;
