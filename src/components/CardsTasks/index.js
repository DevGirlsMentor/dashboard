import { ContainerAvatar, ContainerCardsTasks, FooterCards } from "./styles";

import IconEdit from "../../assets/images/icon-update.png";

export const CardsTasks = () => {
  return (
    <ContainerCardsTasks>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <p>
        Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et
        consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris.
        Aenean et eros ut erat gravida rhoncus a et velit.
      </p>

      <FooterCards>
        <time>15 dez 2021</time>

        <div>
          <ContainerAvatar />
          <img src={IconEdit} alt="Edit" />
        </div>
      </FooterCards>
    </ContainerCardsTasks>
  );
};
