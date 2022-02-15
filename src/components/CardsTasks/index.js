import { ContainerAvatar, ContainerCardsTasks, FooterCards } from "./styles";

import IconEdit from "../../assets/images/icon-update.png";

export const CardsTasks = ({ title, description, date, hour, responsable }) => {

  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join('');

    return firstLetters;
  }

  return (
    <ContainerCardsTasks>
      <h4>{title}</h4>
      <p>{description}</p>

      <FooterCards>
        <time>{date} {hour}</time>

        <div>
          <ContainerAvatar>
            <p>{getFirstLetters(responsable)}</p>
          </ContainerAvatar>
          <img src={IconEdit} alt="Edit" />
        </div>
      </FooterCards>
    </ContainerCardsTasks>
  );
};
