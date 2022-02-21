import styled from 'styled-components';
import { colors } from "../../assets/styles/variables";

const setThemes = (theme) => {
  switch (theme) {
    case "green":
      return colors.green;
    case "yellow":
      return colors.yellow;
    default:
      return colors.pinkMedium;
  }
};

export const ContainerCard = styled.div`
	background-color: #fff;
	filter: drop-shadow(0px 4px 4px rgba(251, 134, 148, 0.2));
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 50px;
	width: 180px;
	color: ${({ theme }) => setThemes(theme)};
	font-family: "Roboto";
	font-weight: bold;

	img {
		width: 25px;
	}

`;
