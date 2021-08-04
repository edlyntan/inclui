import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, useLocation } from 'react-router-dom';
import { eventID } from '../../data';
import { Page, PageTitle, SectionTitle, OptionsButton } from '../Elements';
import { fetchUserTeams, fetchEvent } from '../../api/api';

const ViewEvent = () => {
	let location = useLocation();
	const currEventId = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

	const [ userTeams, setUserTeams ] = useState([]);
	const [ event, setEvent ] = useState([]);
	const [ showDesc, setShowDesc ] = useState(false);

	useEffect(() => {
		(async () => setUserTeams(await fetchUserTeams()))();
		(async () => setEvent(await fetchEvent(currEventId)))();
	}, []);

	useEffect(
		() => {
			console.log(userTeams);
		},
		[ event ]
	);

	return (
		<Page>
			<PageTitle>{event.title}</PageTitle>
			{event.image && (
				<img
					src={event.image}
					alt={event.title}
					style={{
						maxWidth: '50%',
						maxHeight: '250px'
					}}
				/>
			)}
			{showDesc ? (
				<React.Fragment>
					<div style={{ maxWidth: '70vw', margin: '1rem 0 1rem 0' }}>{event.description}</div>
					<button onClick={() => setShowDesc(!showDesc)}>Hide Description</button>
				</React.Fragment>
			) : (
				<button onClick={() => setShowDesc(!showDesc)}>Show Description</button>
			)}
			<Link to={`/volunteer/events/${eventID}/generate-teams`}>
				<OptionsButton>Generate Teams</OptionsButton>
			</Link>
			<OptionsButton className="button-unavailable">Message</OptionsButton>
			<SectionTitle>Participants</SectionTitle>
			<div>
				<p>Total Participants: {userTeams.length}</p>
				<p>Expected Turnout: y</p>
			</div>
			<div>
				{userTeams &&
					userTeams.map((userTeams) => {
						return (
							<div key={userTeams.user.id}>
								{userTeams.user.name} {userTeams.user.age} {userTeams.user.skills}{' '}
								{userTeams.user.attendanceScore} {userTeams.team.name}{' '}
							</div>
						);
					})}
			</div>
		</Page>
	);
};

export default withAuthenticator(ViewEvent);
