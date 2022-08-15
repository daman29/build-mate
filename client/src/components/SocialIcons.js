import { FaMailBulk, FaGithub, FaLinkedin, FaMobile } from "react-icons/fa";
import { StyledSocialIcons } from "../styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://github.com/daman29" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="mailto:damneet.sambhy@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaMailBulk />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/damneet-sambhy/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="tel: +61450088300" target="_blank" rel="noreferrer">
          <FaMobile />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
