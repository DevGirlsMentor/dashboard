import IconPlus from "../../assets/images/icon-plus.png";
import { ContainerColumn } from "./styles";

export const Column = ({ children }) => {
  return (
    <ContainerColumn>
      <div>
        <img />
        <p>Nome</p>
        <p>0</p>
      </div>

      <div>{children}</div>

      <button>
        <img src={IconPlus} alt="Add" />
      </button>
    </ContainerColumn>
  );
};
