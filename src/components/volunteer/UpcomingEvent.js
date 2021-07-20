import React from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { eventID, lorem1P } from '../../data';
import { Page, PageTitle, EventPost, EventTag, FlexContainer } from '../Elements';

const UpcomingEvent = () => {
	const partNumFetchedData = 1;
	return (
		<Page>
			<PageTitle>Upcoming Events</PageTitle>
			<FlexContainer>
				<Link to={`/volunteer/events/${eventID}`}>
					<EventPost title="Some Day" date="01/09/1991" desc={lorem1P} partNum={partNumFetchedData}>
						<EventTag category="Refugees" />
					</EventPost>
				</Link>
			</FlexContainer>
		</Page>
	);
};

export default withAuthenticator(UpcomingEvent);
