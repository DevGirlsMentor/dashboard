import { useState } from "react";
import Modal from "../Modal";
import { ContainerModalFormTasks } from "./styles";

const ModalFormTasks = ({ onClose, defaultStatus, handleAddTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [responsable, setResponsable] = useState('')
  const [status, setStatus] = useState(defaultStatus)

  function handleSaveTask() {
    handleAddTask({
      title,
      description,
      date,
      hour,
      responsable,
      status,
    })
  }

  return (
    <Modal>
      <ContainerModalFormTasks>
        <label>
          Title
          <input onChange={e => setTitle(e.currentTarget.value)} />
        </label>

        <label>
          Description
          <input onChange={e => setDescription(e.currentTarget.value)} />
        </label>

        <div>
          <label>
            Date
            <input onChange={e => setDate(e.currentTarget.value)} />
          </label>

          <label>
            Hour
            <input onChange={e => setHour(e.currentTarget.value)} />
          </label>
        </div>

        <div>
          <label>
            Responsable
            <input onChange={e => setResponsable(e.currentTarget.value)} />
          </label>

          <label>
            Status
            <select defaultValue={defaultStatus} onChange={e => setStatus(e.currentTarget.value)} >
              <option value="to do">To do</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </select>
          </label>
        </div>

        <button type="button" onClick={handleSaveTask}>Save</button>
        <button type="button" onClick={onClose}>fechar</button>

      </ContainerModalFormTasks>
    </Modal>
  );
};

export default ModalFormTasks;
