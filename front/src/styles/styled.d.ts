import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      background: string;
      backgroundLight: string;
      red: string;
      green: string;
    };
  }
}
