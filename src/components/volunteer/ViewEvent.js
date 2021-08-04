import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, useLocation } from 'react-router-dom';
import { eventID } from '../../data';
import { Page, PageTitle, SectionTitle, OptionsButton } from '../Elements';
import { fetchUserTeams, fetchEvent } from '../../api/api';
import '../css/Elements.css';

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

	userTeams.sort(function(a, b) {
		return a.team.name - b.team.name;
	});

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
			<br />
			<Link to={`/volunteer/events/${eventID}/generate-teams`}>
				<OptionsButton>Generate Teams</OptionsButton>
			</Link>
			<OptionsButton className="button-unavailable">Message</OptionsButton>
			<SectionTitle>
				<h3> Participants </h3>
			</SectionTitle>
			<div>
				<p>Total Participants: {userTeams.length}</p>
				<p>Expected Turnout: 12-13</p>
			</div>
			<div key="a" className="userTeamTableHeader">
				<b>
					<p>Name </p>
				</b>
				<b>
					<p>Team </p>
				</b>
				<b>
					<p>Age </p>
				</b>
				<b>
					<p>Skills</p>
				</b>
				<b>
					<p>Attendance score</p>{' '}
				</b>
			</div>
			<div>
				{userTeams &&
					userTeams.map((userTeams) => {
						return (
							<div key={userTeams.user.id} className="userTeamTable">
								<p>{userTeams.user.name}</p>
								<p>{userTeams.team.name}</p>
								<p>{userTeams.user.age}</p>
								<p>{userTeams.user.skills}</p>
								<p>{userTeams.user.attendanceScore}</p>
							</div>
						);
					})}
			</div>
		</Page>
	);
};

export default withAuthenticator(ViewEvent);
