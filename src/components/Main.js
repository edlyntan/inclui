import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="Home">
			<h1>Volunteer</h1>
			<button>Create Event</button>
			<Link to="/upcoming">
				<button>Upcoming Events</button>
			</Link>
			<button>Previous Events</button>
			<h1>NGO Profile</h1>
			<AmplifySignOut />
		</div>
	);
};

export default withAuthenticator(Home);
