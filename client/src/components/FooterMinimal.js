import SocialIcons from "./SocialIcons";
import { Container } from "../styles/Container.styled";
import { StyledFooterMinimal } from "../styles/Footer.styled";
import { Flex } from "../styles/Flex.styled";

export default function FooterMinimal() {
  return (
    <StyledFooterMinimal>
      <Container>
        <Flex>
        <h1>Build Mate</h1>
        <SocialIcons />

        <p>&copy; 2021 Huddle. All rights reserved</p>
        </Flex>
      </Container>
    </StyledFooterMinimal>
  );
}
