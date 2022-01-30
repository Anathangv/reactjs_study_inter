import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: roboto, sans-serif;
  }

  body{
    font-family: roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.primary}
  }

  input, button, textarea, select {
    font-family: roboto, sans-serif;
  }

  input:focus, textarea:focus, select:focus{
    outline: none ;
  }

  a{
    text-decoration: none;
    /* color: {({ theme }) => theme?.colors?.primary}; */
  }
`;

export default GlobalStyle;
