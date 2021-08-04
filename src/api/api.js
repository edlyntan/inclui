import { API, Storage } from 'aws-amplify';
import { createUserTeam } from '../graphql/mutations';
import { listEvents, listUsers, listUserTeams, getEvent } from '../graphql/queries';
import { createTeam, updateUserTeam, createEvent } from '../graphql/mutations';

// const defaultTeamID = '90737396-f2dc-4100-892c-9877a0b2b7f6';

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
};

export const setDefaultTeam = async (teamId) => {
	const apiData = await API.graphql({ query: listUsers });
	const users = apiData.data.listUsers.items;

	users.forEach(async (user) => {
		await API.graphql({
			query: createUserTeam,
			variables: {
				input: {
					teamId: teamId,
					userId: user.id
				}
			}
		});
	});
};

export const addTeam = async (teamName) => {
	const returned = await API.graphql({
		query: createTeam,
		variables: { input: { name: teamName } }
	});
	return returned.data.createTeam.id;
	// console.log('AAAAAA', returned, returned.data.createTeam.id);
};

export const updateTeam = async (userTeamId, teamID) => {
	const returned = await API.graphql({
		query: updateUserTeam,
		variables: { input: { id: userTeamId, teamId: teamID } }
	});
	return returned.data.updateUserTeam;
};

export const addEvent = async (formData) => {
	if (!formData.title || !formData.image || !formData.description) {
		console.log('NG');
		return;
	}
	await API.graphql({
		query: createEvent,
		variables: {
			input: {
				title: formData.title,
				image: formData.image,
				organizer: "Milena Women's Society",
				description: formData.description,
				date: formData.date,
				time: formData.startTime + '-' + formData.endTime
			}
		}
	});
	if (formData.image) {
		const image = await Storage.get(formData.image);
		formData.image = image;
	}
};

export const fetchEvent = async (eventId) => {
	const returned = await API.graphql({ query: getEvent, variables: { id: eventId } });
	const event = returned.data.getEvent;
	if (event.image) {
		const getImage = await Storage.get(event.image);
		event.image = getImage;
	}
	return event;
};
