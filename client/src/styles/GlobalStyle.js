import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.color};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
