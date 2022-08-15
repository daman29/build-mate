import styled from "styled-components";

export const FlexDashboard = styled.div`
  display: flex;
`;

export const LeftColumn = styled.div`
  flex: 1 1 30%;
  display: flex;
`;

export const RightColumn = styled(LeftColumn)`
  flex: 1 1 70%;
  flex-direction: column;
`;
