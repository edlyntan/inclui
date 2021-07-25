import { API, Storage } from 'aws-amplify';
import { events } from '../data';
import { createUserTeam } from '../graphql/mutations';
import { listEvents, listUsers, listUserTeams } from '../graphql/queries';

const defaultTeamID = "90737396-f2dc-4100-892c-9877a0b2b7f6";

export const fetchEvents = async () => {
	const apiData = await API.graphql({ query: listEvents });
	const eventsFromAPI = apiData.data.listEvents.items;
	await Promise.all(
		eventsFromAPI.map(async (event) => {
			if (event.image) {
				const getImage = await Storage.get(event.image);
				event.image = getImage;
			}
			return event;
		})
	);
	return eventsFromAPI;
};

export const fetchUserTeams = async () => {
	const apiData = await API.graphql({ query: listUserTeams });
	const userTeams = apiData.data.listUserTeams.items;
	return userTeams;
}

export const setDefaultTeam = async () => {
	const apiData = await API.graphql({ query: listUsers });
	const users = apiData.data.listUsers.items;

	users.forEach(async (user) => {
		await API.graphql({ 
			query: createUserTeam, 
			variables: { 
				input: { 
					teamId: defaultTeamID, 
					userId: user.id 
				} 
			} 
		});		
	});
}

