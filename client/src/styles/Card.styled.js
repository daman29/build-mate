import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
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

export const CategoryCard = styled(StyledCard)`
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 10px;
  width: 100%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.midBlue};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 100px;
    justify-content: space-between;
  }
`;

export const DashboardCard = styled(CategoryCard)`
  flex: 1 1 70%;
  align-items: center;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.midBlue};
  text-align: center;
  & > p > span {
    color: ${({ theme }) => theme.colors.midBlue};
  }
  & > h3 {
    color: ${({ theme }) => theme.colors.textFade};
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    flex: 1 1 100%;
    flex-wrap: wrap;
    max-height: none;
  }
`;
export const ProjectTeamCard = styled(DashboardCard)`
  flex: 1 1 30%;
`;

export const ProjectCard = styled(CategoryCard)`
  width: 95%;
  max-width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.lightBlue};

  & > div {
    display: flex;
    flex: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: none;
  }
`;

export const TeammateCard = styled(ProjectCard)`
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 0;
  }
  /* min-width: ${({ modal }) => (modal ? "" : 0)}; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: none;
  }
`;
