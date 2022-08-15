import SocialIcons from "./SocialIcons";
import { Container } from "../styles/Container.styled";
import { Flex, FlexColumn } from "../styles/Flex.styled";
import { StyledFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FlexColumn>
          <h1>Build Mate</h1>
          <Flex>
            <ul>
              <li>+61 4 5008 8300</li>
              <li>damneet.sambhy@hotmail.com</li>
              <li>Contact Us</li>
            </ul>
            <SocialIcons />
          </Flex>
          <p>&copy; 2022 Build Mate. All rights reserved</p>
        </FlexColumn>
      </Container>
    </StyledFooter>
  );
}
