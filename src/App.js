import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { SideNav } from './components/Elements';
import Main from './components/Main';
import Volunteer from './components/volunteer/Home';
import UpcomingEvent from './components/volunteer/UpcomingEvent';
import CreateEvent from './components/volunteer/CreateEvent';
import ViewEvent from './components/volunteer/ViewEvent';
import GenerateTeams from './components/volunteer/GenerateTeams';
import { fetchUserTeams } from './api/api';
import './App.css';

import Amplify from 'aws-amplify';
// import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// async function fetchUsers() {
// 	let retrieved = [];
// 	//retrieved = await API.graphql(graphqlOperation(listUsers, {filter: {gender: { eq: "Female"}}}, {limit: 5})); //testing filter
// 	retrieved = await API.graphql(
// 		graphqlOperation(usersByAttendance, { sortDirection: 'DESC' }, { filter: { gender: { eq: 'Female' } } })
// 	);
// 	/*await API.graphql(graphqlOperation(updateUser,
// 		{
// 			input:
// 			{
// 				id: retrieved.data.listUsers.items[0].id,
// 				gender: "Female"
// 			}
// 		}
// 	));*/

// 	console.log(
// 		retrieved.data.listUsers.items.length,
// 		retrieved.data.listUsers.items[0].name,
// 		retrieved.data.listUsers.items[0].gender
// 	);
// }

const App = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		// setDefaultTeam();
	// 		const haha = await fetchUserTeams();
	// 		// console.log(haha[12].user.name, JSON.stringify(haha[12].user.skills), haha[12].team.name);
	// 	})();
	// }, []);

	return (
		<div>
			<SideNav />
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/volunteer" component={Volunteer} exact />
				<Route path="/volunteer/create" component={CreateEvent} exact />
				<Route path="/volunteer/upcoming" component={UpcomingEvent} exact />
				<Route path="/volunteer/events/:eventID" component={ViewEvent} exact />
				<Route path="/volunteer/events/:eventID/generate-teams" component={GenerateTeams} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
