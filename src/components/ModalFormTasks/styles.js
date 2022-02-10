import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerModalFormTasks = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 20.18rem;
  width: 100%;

  div {
    display: flex;

    width: 100%;
    column-gap: 1.25rem;

    label {
      width: 100%;
    }
  }

  label {
    color: ${colors.grey};
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    input,
    select {
      margin-block: 0.5rem;
      border: 1px solid ${colors.grey};

      height: 2rem;
    }
  }

  button {
    background-color: ${colors.pinkMedium};
    border: 0;
    outline: none;
    color: ${colors.white};
    border-radius: 50px;

    width: 6.56rem;
    padding-block: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    position: absolute;
    bottom: 0;
    right: 0;
  }

  button + button {
    right: 8rem;
  }
`;
