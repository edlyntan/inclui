import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { OnlyUsedForExport } from '../../graphql/test_queries';
import { listUsers } from '../../graphql/queries';
import { eventID } from '../../data';
import { Page, PageTitle, SectionTitle, OptionsButton } from '../Elements';

const ViewEvent = () => {
	const [ notes, setNotes ] = useState([]);
	const [ vols, setVols ] = useState([]);

	useEffect(() => {
		fetchSpecificNote();
		fetchVolByName();
	}, []);

	const fetchSpecificNote = async () => {
		const apiData = await API.graphql({
			query: OnlyUsedForExport,
			variables: { filter: { name: { eq: 'cfvg' } } }
		});
		setNotes(apiData.data.listNotes.items);
	};

	const fetchVolByName = async () => {
		const apiData = await API.graphql({
			query: listUsers
		});
		setVols(apiData.data.listUsers.items);
	};

	console.log(notes);
	console.log(vols);

	return (
		<Page>
			<PageTitle>Event Name</PageTitle>
			<Link to={`/volunteer/events/${eventID}/generate-teams`}>
				<OptionsButton>Generate Teams</OptionsButton>
			</Link>
			<OptionsButton className="button-unavailable">Message</OptionsButton>
			<SectionTitle>Participants</SectionTitle>
			{/* <h2>Notes</h2>
			<div style={{ marginBottom: 30 }}>
				{notes.map((note) => (
					<div key={note.id || note.name}>
						<h2>{note.name}</h2>
						<p>{note.description}</p>
					</div>
				))}
			</div>
			<h2>Volunteers</h2>
			<div style={{ marginBottom: 30 }}>
				{vols.map((vol) => (
					<div key={vol.id || vol.name}>
						<h2>{vol.name}</h2>
						<p>{vol.age}</p>
					</div>
				))}
			</div> */}
		</Page>
	);
};

export default withAuthenticator(ViewEvent);
