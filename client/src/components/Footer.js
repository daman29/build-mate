import SocialIcons from './SocialIcons'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { StyledFooter } from '../styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <h1>Build Mate</h1>

        <Flex>
          <ul>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Build Mate. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}