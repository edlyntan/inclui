import React from 'react';
import { Link } from 'react-router-dom';

const GenerateTeams = () => {
	return (
		<div className="GenerateTeams">
			<Link to="/">
				<button>Home</button>
			</Link>
			<h1>Generate Teams</h1>
			<Link to="/teams">
				<button>View Teams</button>
			</Link>
		</div>
	);
};

export default GenerateTeams;
