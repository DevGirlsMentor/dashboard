import React from 'react';
import { CardsTasks } from '../CardsTasks';

import { Container } from './styles';

function ListInProgress() {
	const mock = [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			description: 'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
			date: '15 dez 2021',
			hour: '10:00',
			responsable: 'Nury',
			status: 'done'
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			description: 'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
			date: '16 dez 2021',
			hour: '12:00',
			responsable: 'Camila',
			status: 'done'
		}
	]

	return (
		<Container>
			<h2>Tasks in progress</h2>
			{
				mock.map((task, index) => (
					<CardsTasks
						key={index}
						title={task.title}
						description={task.description}
						date={task.date}
						hour={task.hour}
						responsable={task.responsable}
						status={task.status}
					/>
				))
			}
		</Container>
	);
}

export default ListInProgress;