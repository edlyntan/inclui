import { API, Storage } from 'aws-amplify';
import { events } from '../data';
import { listEvents } from '../graphql/queries';

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
	return apiData.data.listEvents.items;
};
