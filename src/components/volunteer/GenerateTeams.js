import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, useHistory } from 'react-router-dom';
import { eventID } from '../../data';

const GenerateTeams = () => {
	const history = useHistory();

	const updateThenGoBack = () => {
		// update through api
		history.go(-1);
	};
	return (
		<div className="GenerateTeams page">
			<h1>Generate Teams for Name</h1>
			<button onClick={() => history.go(-1)}>Cancel</button>
			<button onClick={updateThenGoBack}>Confirm</button>
		</div>
	);
};

export default withAuthenticator(GenerateTeams);
