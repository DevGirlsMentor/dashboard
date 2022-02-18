import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerCardsEvents = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  max-width: 13.75rem;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(251, 134, 148, 0.2);

  margin-bottom: 10px;

  p,
  time {
    font-family: "Roboto Slab", serif;
    font-weight: bold;
    font-size: 12px;
  }

  time {
    color: ${colors.purple};
  }

  p {
    color: ${colors.black};
    margin-top: 10px;
  }
`;
