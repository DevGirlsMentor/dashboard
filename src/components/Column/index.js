import IconPlus from "../../assets/images/icon-plus.png";
import { ContainerColumn, HeaderColumn } from "./styles";

export const Column = ({ children, name, value, icon, theme }) => {
  return (
    <ContainerColumn theme={theme}>
      <HeaderColumn theme={theme}>
        <img src={icon} alt={name} />
        <p>{name}</p>
        <p>{value}</p>
      </HeaderColumn>

      <div>{children}</div>

      <button>
        <img src={IconPlus} alt="Add" />
      </button>
    </ContainerColumn>
  );
};
