import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="Home page">
			<div className="page-content">
				<h1>Volunteer</h1>
				<button>Create Event</button>
				<Link to="/volunteer/upcoming">
					<button>Upcoming Events</button>
				</Link>
				<button>Previous Events</button>
			</div>
		</div>
	);
};

export default withAuthenticator(Home);
