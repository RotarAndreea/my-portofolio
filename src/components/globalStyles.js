import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

*{
  box-sizing:border-box;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
