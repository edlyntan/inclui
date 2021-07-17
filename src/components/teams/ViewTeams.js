import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/custom/queries';

const ViewTeams = () => {
	const [ vols, setVols ] = useState([]);

	useEffect(() => {
		fetchVolByAge();
	}, []);

	const fetchVolByAge = async () => {
		const apiData = await API.graphql({ query: listNotes });
		const volsFromAPI = apiData.data.listNotes.items;
		await Promise.all(
			volsFromAPI.map(async (vol) => {
				return vol;
			})
		);
		setVols(apiData.data.listNotes.items);
	};
	return (
		<div className="ViewTeams">
			<Link to="/">
				<button>Home</button>
			</Link>
			<h1>View Teams</h1>
			<Link to="/teams/generate">
				<button>Generate Teams</button>
			</Link>
			<h2>Results</h2>
			<div style={{ marginBottom: 30 }}>
				{vols.map((vol) => (
					<div key={vol.id || vol.name}>
						<h2>{vol.name}</h2>
						<p>{vol.age}</p>
						<p>{vol.gender}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewTeams;
