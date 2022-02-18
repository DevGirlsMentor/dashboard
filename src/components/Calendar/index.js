import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { ContainerCalendar } from "./styles";
import ModalFormEvents from "../ModalFormEvents";
import { useState } from "react";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const Calendar = ({ events, setEvents }) => {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState({});

  const handleSelect = ({ start }) => {
    setDate({ start, end: start });
    setOpenModal(true);
  };

  const handleSave = (title, start, end) => {
    const initial = date.start.setHours(
      Number(start.slice(0, 2)),
      Number(start.slice(3, 5))
    );
    const final = date.end.setHours(
      Number(end.slice(0, 2)),
      Number(end.slice(3, 5))
    );

    if (initial > final) {
      alert("The start time must be greater than the end date.");

      return;
    }

    setEvents([...events, { title, start: initial, end: final }]);
    setOpenModal(false);
  };

  return (
    <ContainerCalendar>
      <BigCalendar
        localizer={localizer}
        events={events}
        style={{ height: 579, width: 792 }}
        defaultView="month"
        views={["month"]}
        selectable
        onSelectSlot={handleSelect}
      />

      {openModal ? <ModalFormEvents handleSave={handleSave} /> : null}
    </ContainerCalendar>
  );
};
