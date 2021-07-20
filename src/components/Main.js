import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Page, PageTitle } from './Elements';

const Main = () => {
	return (
		<Page>
			<PageTitle>Stats</PageTitle>
		</Page>
	);
};

export default withAuthenticator(Main);
