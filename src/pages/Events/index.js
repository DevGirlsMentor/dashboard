import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { EventsList } from "../../components/EventsList";

export const Events = () => {
  const [events, setEvents] = useState([]);

  return (
    <div className="main-events">
      <EventsList events={events} />
      <Calendar events={events} setEvents={setEvents} />
    </div>
  );
};
