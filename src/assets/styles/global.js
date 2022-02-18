import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  body {
    background-color: ${colors.pink};
  }

  p, button, b, strong, input, time, h4, label {
    font-family: 'Roboto', sans-serif;
  }

  main {
    margin-left: 50px;

    width: calc(100% - 50px);
    height: calc(100vh - 56.91px);

    padding: 1.87rem;
  }

  .main-tasks {
    display: flex;
    column-gap: 2.31rem;
  }

  .main-events {
    display: flex;
    column-gap: 2.31rem;
  }
`;
