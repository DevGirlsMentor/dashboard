import CardStatusTotal from "../../components/CardStatusTotal";

import IconTodo from "../../assets/images/icon-todo.png";
import IconInProgress from "../../assets/images/icon-progress.png";
import IconDone from "../../assets/images/icon-done.png";
import CardStatusList from "../../components/CardStatusList";
import ListInProgress from "../../components/ListInProgress";
import EventsListByPeriod from "../../components/EventsListByPeriod";

export const Dashboard = () => {
  return (
    <div className="main-dashboard">
      <CardStatusList>
        <CardStatusTotal theme="pink" total={10} name="To Do" icon={IconTodo} />
        <CardStatusTotal theme="yellow" total={11} name="In progress" icon={IconInProgress} />
        <CardStatusTotal theme="green" total={12} name="Done Today" icon={IconDone} />
        <CardStatusTotal theme="green" total={12} name="Done this week" icon={IconDone} />
        <CardStatusTotal theme="green" total={12} name="Done this month" icon={IconDone} />
      </CardStatusList>

      <div className="lists">
        <ListInProgress />
        <EventsListByPeriod />
      </div>
    </div>
  )
};
