import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerMenu = styled.div`
  height: 100vh;
  width: 3.12rem;
  background-color: ${colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  padding: 5rem 0;

  a {
    margin-bottom: 30px;
  }
`;
