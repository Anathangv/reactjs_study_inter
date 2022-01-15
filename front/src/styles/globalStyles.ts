import { createGlobalStyle } from "styled-components";

interface Theme {
  colors?: {
    primary: string;
  };
}

export const GlobalStyle = createGlobalStyle<Theme>`
  * {
    padding: 0;
    margin: 0;
  }

  body{
    /* not working */
    background-color: ${(props: Theme) => props?.colors?.primary}
    /* background-color: #FFFFFF; */
  }
`;

export default GlobalStyle;
