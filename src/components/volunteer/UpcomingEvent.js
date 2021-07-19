import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { eventID } from '../../data';
import { LinkedEventPost, FlexContainer } from '../Elements';

const UpcomingEvent = () => {
	const EventPost = (props) => {
		return (
			<div>
				{props.real ? (
					<Link to={`/volunteer/events/${eventID}`}>
						<button>View Event</button>
					</Link>
				) : (
					<button>View Event</button>
				)}
			</div>
		);
	};
	return (
		<div className="UpcomingEvent page">
			<h1>Upcoming Events</h1>
			{/* <EventPost real={true} />
			<EventPost real={false} />
			<EventPost real={false} /> */}
			<FlexContainer>
				<LinkedEventPost link={`/volunteer/events/${eventID}`} linked />
				{/* <LinkedEventPost link={`/volunteer/events/${eventID}`} /> */}
			</FlexContainer>
		</div>
	);
};

export default withAuthenticator(UpcomingEvent);
