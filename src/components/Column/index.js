import IconPlus from "../../assets/images/icon-plus.png";
import { ContainerColumn, HeaderColumn } from "./styles";

export const Column = ({ children, name, value, icon, theme, onShowModal }) => {
  return (
    <ContainerColumn theme={theme}>
      <HeaderColumn theme={theme}>
        <img src={icon} alt={name} />
        <p>{name}</p>
        <p>{value}</p>
      </HeaderColumn>

      <div>{children}</div>

      <button onClick={onShowModal}>
        <img src={IconPlus} alt="Add" />
      </button>
    </ContainerColumn>
  );
};
