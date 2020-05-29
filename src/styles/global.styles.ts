import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.black}
  }
`;
