import React from 'react';
import { Link } from 'react-router-dom';

const ViewTeams = () => {
	return (
		<div className="ViewTeams">
			<Link to="/">
				<button>Home</button>
			</Link>
			<h1>View Teams</h1>
			<Link to="/teams/generate">
				<button>Generate Teams</button>
			</Link>
		</div>
	);
};

export default ViewTeams;
