import { useState } from "react";
import Modal from "../Modal";
import { ContainerFormEvents } from "./styles";

const ModalFormEvents = ({ handleSave }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <Modal>
      <ContainerFormEvents>
        <label>
          Title
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>
        <div>
          <label>
            Start
            <input
              type="time"
              onChange={(event) => setStartTime(event.target.value)}
              value={startTime}
            />
          </label>
          <label>
            End
            <input
              type="time"
              onChange={(event) => setEndTime(event.target.value)}
              value={endTime}
            />
          </label>
        </div>

        <button onClick={() => handleSave(title, startTime, endTime)}>
          Save
        </button>
        <button>Close</button>
      </ContainerFormEvents>
    </Modal>
  );
};

export default ModalFormEvents;
