import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { fetchEvents } from '../../api/api';
import { Page, PageTitle, EventPost, EventTag, FlexContainer } from '../Elements';

const UpcomingEvent = () => {
	const [ events, setEvents ] = useState();

	useEffect(() => (async () => setEvents(await fetchEvents()))(), []);

	console.log(events);

	return (
		<div>
			{events && (
				<Page>
					<PageTitle>Upcoming Events</PageTitle>
					<FlexContainer>
						{events.map((event) => {
							return (
								<Link to={`/volunteer/events/${event.id}`}>
									<EventPost
										key={event.id}
										title={event.title}
										image={event.image}
										date={event.date}
										time={event.time}
										desc={event.description}
									>
										<EventTag category="Refugees" />
									</EventPost>
								</Link>
							);
						})}
					</FlexContainer>
				</Page>
			)}
		</div>
	);
};

export default withAuthenticator(UpcomingEvent);
