import LogoDashboard from "../../assets/images/icon-dashboard-menu.png";
import { ShowDate } from "../ShowDate";
import { ContainerHeader } from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <div>
        <img src={LogoDashboard} alt="Logo página" />
        <p>Dashboard</p>
      </div>

      <ShowDate />
    </ContainerHeader>
  );
};
