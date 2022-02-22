import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

export const Container = styled.div`
	margin-top: 4rem;

	h2 {
		text-decoration-line: underline;
		color: ${colors.purple};
		font-family: Roboto;
		font-weight: bold;
		font-size: 12px;
		margin: 1rem 0;
	}

	.cards {
		display: flex;
		align-items: center;

		div {
			height: 100px;
		}

		div + div {
			margin-left: 1rem;
		}
	}

`;
