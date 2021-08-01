import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { Page, PageTitle, MenuButton } from '../Elements';

const Home = () => {
	return (
		<Page>
			<PageTitle>Volunteer</PageTitle>
			<div>
				<Link to="/volunteer/create">
					<MenuButton>Create Event</MenuButton>
				</Link>
				<div>
					<Link to="/volunteer/upcoming">
						<MenuButton>Upcoming Events</MenuButton>
					</Link>
					<MenuButton className="button-unavailable">Previous Events</MenuButton>
				</div>
			</div>
		</Page>
	);
};

export default withAuthenticator(Home);
