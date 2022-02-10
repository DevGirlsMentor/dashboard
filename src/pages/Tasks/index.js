import { useState } from "react";
import { CardsTasks } from "../../components/CardsTasks";
import { Column } from "../../components/Column";

import IconTodo from "../../assets/images/icon-todo.png";
import IconInProgress from "../../assets/images/icon-progress.png";
import IconDone from "../../assets/images/icon-done.png";
import ModalFormTasks from "../../components/ModalFormTasks";

export const Tasks = () => {
  const [showModal, setShowModal] = useState(false)
  const [defaultStatus, setDefaultStatus] = useState('to do')
  const [tasks, setTasks] = useState([])

  function handleOpenModalWithDefaultStatus(status) {
    setDefaultStatus(status)
    setShowModal(true)
  }

  function handleAddTask(task) {
    setTasks([...tasks, task])
  }

  return (
    <div className="main-tasks">
      {showModal &&
        <ModalFormTasks
          defaultStatus={defaultStatus}
          onClose={() => setShowModal(false)}
          handleAddTask={handleAddTask}
        />
      }
      <Column
        name="Todo"
        value="0"
        theme="pink"
        icon={IconTodo}
        onShowModal={() => handleOpenModalWithDefaultStatus('to do')}
      >
        {
          tasks.filter(t => t.status === 'to do').map((task, index) => (
            <CardsTasks
              key={index}
              title={task.title}
              description={task.description}
              date={task.date}
              hour={task.hour}
              responsable={task.responsable}
              status={task.status}
            />
          ))
        }
      </Column>
      <Column
        name="In progress"
        value="0"
        theme="yellow"
        icon={IconInProgress}
        onShowModal={() => handleOpenModalWithDefaultStatus("in progress")}
      >
        {
          tasks.filter(t => t.status === "in progress").map((task, index) => (
            <CardsTasks
              key={index}
              title={task.title}
              description={task.description}
              date={task.date}
              hour={task.hour}
              responsable={task.responsable}
              status={task.status}
            />
          ))
        }
      </Column>
      <Column
        name="Done"
        value="0"
        theme="green"
        icon={IconDone}
        onShowModal={() => handleOpenModalWithDefaultStatus("done")}
      >
        {
          tasks.filter(t => t.status === 'done').map((task, index) => (
            <CardsTasks
              key={index}
              title={task.title}
              description={task.description}
              date={task.date}
              hour={task.hour}
              responsable={task.responsable}
              status={task.status}
            />
          ))
        }
      </Column>
    </div>
  );
};
