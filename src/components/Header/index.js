import { useLocation } from "react-router-dom";

import { ShowDate } from "../ShowDate";
import { ContainerHeader } from "./styles";

import IconDashboard from "../../assets/images/icon-dashboard-menu.png";
import IconCalendar from "../../assets/images/icon-calendar.png";
import IconTasks from "../../assets/images/icon-tasks.png";

export const Header = () => {
  const location = useLocation();

  const getIcons = (name) => {
    switch (name) {
      case "Tasks":
        return IconTasks;
      case "Events":
        return IconCalendar;
      default:
        return IconDashboard;
    }
  };

  return (
    <ContainerHeader>
      <div>
        <img
          src={getIcons(location && location.state && location.state.name)}
          alt="Logo página"
        />
        <p>
          {(location && location.state && location.state.name) || "Dashboard"}
        </p>
      </div>

      <ShowDate />
    </ContainerHeader>
  );
};
