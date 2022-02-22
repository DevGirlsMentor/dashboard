import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

export const Container = styled.div`
	margin-top: 4rem;
	border-right: 0.1rem solid ${colors.purple};
	padding-right: 2.31rem;

	h2 {
		text-decoration-line: underline;
		color: ${colors.purple};
		font-family: Roboto;
		font-weight: bold;
		font-size: 12px;
		margin-bottom: 1rem;
	}

	div + div {
		margin-top: 1rem;
	}
`;
