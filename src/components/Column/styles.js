import styled from "styled-components";

import { colors } from "../../assets/styles/variables";

const setThemes = (theme) => {
  switch (theme) {
    case "green":
      return colors.green;
    case "yellow":
      return colors.yellow;
    default:
      return colors.pinkMedium;
  }
};

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 24rem;
  height: 100%;

  button {
    width: 1.87rem;
    height: 1.87rem;

    border-radius: 50px;
    border: none;
    background-color: ${({ theme }) => setThemes(theme)};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    cursor: pointer;
  }

  div + div  {
    margin-top: 1rem;
  }
`;

export const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 1.5rem;
  height: 1.62rem;
  margin-bottom: 2rem;

  img {
    width: 1.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1.12rem;
    color: ${({ theme }) => setThemes(theme)};
  }
`;
