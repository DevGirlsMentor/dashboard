import { ContainerAvatar, ContainerCardsTasks, FooterCards } from "./styles";

import IconEdit from "../../assets/images/icon-update.png";

export const CardsTasks = ({title, description, date, hour, responsable}) => {
  return (
    <ContainerCardsTasks>
    <h4>{title}</h4>
    <p>{description}</p>

    <FooterCards>
      <time>{date} {hour}</time>
			<p>{responsable}</p>

      <div>
        <ContainerAvatar />
        <img src={IconEdit} alt="Edit" />
      </div>
    </FooterCards>
  </ContainerCardsTasks>
  );
};
