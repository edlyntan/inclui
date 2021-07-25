import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { OnlyUsedForExport } from '../../graphql/test_queries';
import { listUsers } from '../../graphql/queries';
import { eventID } from '../../data';
import { Page, PageTitle, SectionTitle, OptionsButton } from '../Elements';
import { fetchUserTeams } from '../../api/api';

const ViewEvent = () => {
	const [ userTeams, setUserTeams ] = useState([]);

	useEffect(async () => {
		setUserTeams(await fetchUserTeams());
	}, [])

	return (
		<Page>
			<PageTitle>Event Name</PageTitle>
			<Link to={`/volunteer/events/${eventID}/generate-teams`}>
				<OptionsButton>Generate Teams</OptionsButton>
			</Link>
			<OptionsButton className="button-unavailable">Message</OptionsButton>
			<SectionTitle>Participants</SectionTitle>
			<div>
				{userTeams && userTeams.map((userTeams) => {
					return (<div key={userTeams.user.id}>
						{userTeams.user.name}{" "}    
						{userTeams.user.age}{" "}       
						{userTeams.user.skills}{" "}       
						{userTeams.user.attendanceScore}{" "}      
						{userTeams.team.name}{" "}       
					</div>)
				})}
			</div>
		</Page>
	);
};

export default withAuthenticator(ViewEvent);
