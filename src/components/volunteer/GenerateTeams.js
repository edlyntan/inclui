import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import { Page, PageTitle, FormButton } from '../Elements';

const GenerateTeams = () => {
	const history = useHistory();

	const updateThenGoBack = () => {
		// update through api
		history.go(-1);
	};
	return (
		<Page>
			<PageTitle>Generate Teams for Name</PageTitle>
			<FormButton onClick={() => history.go(-1)}>Cancel</FormButton>
			<FormButton onClick={updateThenGoBack}>Confirm</FormButton>
		</Page>
	);
};

export default withAuthenticator(GenerateTeams);
