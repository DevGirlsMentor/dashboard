import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerCardsTasks = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};

  padding: 0.62rem;
  border-radius: 0.62rem;
  font-size: 0.75rem;

  width: 23.12rem;
  height: 7.43rem;

  h4 {
    font-weight: bold;
    margin-bottom: 0.62rem;
  }
`;

export const FooterCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  time {
    font-weight: bold;
  }
`;

export const ContainerAvatar = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 50px;
  margin-right: 1.2rem;

  p {
    line-height: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
  
`;
