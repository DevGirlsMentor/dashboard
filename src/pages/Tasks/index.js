import { CardsTasks } from "../../components/CardsTasks";
import { Column } from "../../components/Column";

import IconTodo from "../../assets/images/icon-todo.png";
import IconInProgress from "../../assets/images/icon-progress.png";
import IconDone from "../../assets/images/icon-done.png";
import ModalFormTasks from "../../components/ModalFormTasks";

export const Tasks = () => {
  return (
    <div className="main-tasks">
      <ModalFormTasks />
      <Column name="To do" value="0" theme="pink" icon={IconTodo}>
        <CardsTasks />
      </Column>
      <Column name="In progress" value="0" theme="yellow" icon={IconInProgress}>
        <CardsTasks />
      </Column>
      <Column name="Done" value="0" theme="green" icon={IconDone}>
        <CardsTasks />
      </Column>
    </div>
  );
};
