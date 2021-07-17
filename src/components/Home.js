import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="Home">
			<h1>Home</h1>
			<Link to="/teams">
				<button>View Teams</button>
			</Link>
			<Link to="/notes">
				<button>Notes App</button>
			</Link>
			<AmplifySignOut />
		</div>
	);
};

export default withAuthenticator(Home);
