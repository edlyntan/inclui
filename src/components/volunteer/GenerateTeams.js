import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import { Page, PageTitle, FormButton } from '../Elements';

const GenerateTeams = () => {
	const history = useHistory();

	const [ teamsNum, setTeamsNum ] = useState(null);

	useEffect(() => {
		const promptAns = window.prompt('How many teams would you like to have?');
		setTeamsNum(promptAns);
	}, []);

	const updateThenGoBack = () => {
		// update through api
		history.go(-1);
	};

	const reserveTeams = (teamsNum) => {
		for (let i = 0; i < teamsNum; i++) {
			console.log(teamsNum);
			return <h1>{teamsNum}</h1>;
		}
	};

	return (
		<Page>
			<PageTitle>Generate Teams for Name</PageTitle>
			<FormButton onClick={() => history.go(-1)}>Cancel</FormButton>
			<FormButton onClick={updateThenGoBack}>Confirm</FormButton>
			{teamsNum && reserveTeams()}
		</Page>
	);
};

export default withAuthenticator(GenerateTeams);
