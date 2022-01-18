import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerHeader = styled.header`
  background-color: ${colors.white};
  width: calc(100% - 3.12rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 3.12rem;
  padding: 0.56rem 1.87rem;

  color: ${colors.purple};

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.68rem;
    }
  }

  p {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-weight: 600;
    font-size: 1.87rem;
  }

  time {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
