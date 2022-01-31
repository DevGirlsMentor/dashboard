import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const BackgroundModal = styled.div`
  background-color: ${colors.blueTransparent};

  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;

  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background-color: ${colors.pink};
  padding: 2.43rem 1.62rem;

  border-radius: 1.87rem;
  min-width: 27.31rem;
`;
