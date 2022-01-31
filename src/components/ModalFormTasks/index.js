import Modal from "../Modal";
import { ContainerModalFormTasks } from "./styles";

const ModalFormTasks = () => {
  return (
    <Modal>
      <ContainerModalFormTasks>
        <label>
          Title
          <input />
        </label>

        <label>
          Description
          <input />
        </label>

        <div>
          <label>
            Date
            <input />
          </label>

          <label>
            Hour
            <input />
          </label>
        </div>

        <div>
          <label>
            Responsable
            <input />
          </label>

          <label>
            Status
            <select>
              <option>To do</option>
              <option>In progress</option>
              <option>Done</option>
            </select>
          </label>
        </div>

        <button>Save</button>
      </ContainerModalFormTasks>
    </Modal>
  );
};

export default ModalFormTasks;
