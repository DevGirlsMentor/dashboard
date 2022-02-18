import { CardsEvents } from "../CardsEvents";
import { ContainerEventsList } from "./styles";

export const EventsList = ({ events }) => {
  return (
    <ContainerEventsList>
      <h2>Events this week</h2>

      {events &&
        events.map((item) => (
          <CardsEvents
            title={item.title}
            start={new Date(item.start)}
            end={new Date(item.end)}
          />
        ))}
    </ContainerEventsList>
  );
};
