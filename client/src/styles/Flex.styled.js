import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const FlexDashboard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`