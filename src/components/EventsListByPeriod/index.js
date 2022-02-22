import React from 'react';
import { Container } from './styles';
import { CardsEvents } from '../CardsEvents'

function EventsListByPeriod() {

	const mock = [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			start: new Date('08/01/2021 19:00'),
			end: new Date('08/01/2021 22:00')
		},
		{
			title: 'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat.',
			start: new Date('03/01/2022 19:00'),
			end: new Date('03/01/2022 22:00')
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			start: new Date('08/01/2021 19:00'),
			end: new Date('08/01/2021 22:00')
		},
		{
			title: 'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat.',
			start: new Date('03/01/2022 19:00'),
			end: new Date('03/01/2022 22:00')
		}
	]

	return (
		<Container>
			<h2>Next events</h2>
			<div className='cards'>
				{
					mock.map((event, index) => (
						<CardsEvents {...event} />
					))
				}
			</div>
			<h2>Events this month</h2>
			<div className='cards'>
				{
					mock.map((event, index) => (
						<CardsEvents {...event} />
					))
				}
			</div>
			<h2>Events next month</h2>
			<div className='cards'>
				{
					mock.map((event, index) => (
						<CardsEvents {...event} />
					))
				}
			</div>
		</Container>
	)
}

export default EventsListByPeriod;