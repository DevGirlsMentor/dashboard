import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerEventsList = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Roboto Slab", serif;
    font-size: 1rem;
    color: ${colors.purple};

    margin-bottom: 1rem;
  }
`;
