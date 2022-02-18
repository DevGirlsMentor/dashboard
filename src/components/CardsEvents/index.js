import { ContainerCardsEvents } from "./styles";

export const CardsEvents = ({ title, start, end }) => {
  const formatDate = () => {
    const day = start.getDate();
    const month = start.getMonth() + 1;

    return `${day >= 10 ? day : "0" + day}/${
      month >= 10 ? month : "0" + month
    }`;
  };

  const formatHours = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${hour >= 10 ? hour : "0" + hour}:${
      minute >= 10 ? minute : "0" + minute
    }`;
  };

  return (
    <ContainerCardsEvents>
      <time>
        {formatDate()} - {formatHours(start)} - {formatHours(end)}
      </time>
      <p>{title}</p>
    </ContainerCardsEvents>
  );
};
