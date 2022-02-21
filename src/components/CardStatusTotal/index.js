import { ContainerCard } from './styles';

function CardStatusTotal({ total, name, icon, theme }) {
	return (
		<ContainerCard theme={theme}>
			<img src={icon} alt={name} />
			<span>{name}</span>
			<span>{total}</span>
		</ContainerCard>
	)
}

export default CardStatusTotal;