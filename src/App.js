import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { SideNav } from './components/Elements';
import Main from './components/Main';
import Volunteer from './components/volunteer/Home';
import UpcomingEvent from './components/volunteer/UpcomingEvent';
import ViewEvent from './components/volunteer/ViewEvent';
import GenerateTeams from './components/volunteer/GenerateTeams';
// import { users, events } from './data';
import './App.css';

import Amplify, { API, graphqlOperation, input } from 'aws-amplify';
import { createUser, createTeam, createUserTeam, createEvent } from './graphql/mutations';
import { updateUser, updateTeam, updateUserTeam, updateEvent } from './graphql/mutations';
import { listUsers, listTeams, listUserTeams, listEvents, usersByAttendance } from './graphql/queries';
import { getUser, getTeam, getUserTeam, getEvent } from './graphql/queries';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

async function fetchUsers() {
	let retrieved = [];
	//retrieved = await API.graphql(graphqlOperation(listUsers, {filter: {gender: { eq: "Female"}}}, {limit: 5})); //testing filter
	retrieved = await API.graphql(
		graphqlOperation(usersByAttendance, { sortDirection: 'DESC' }, { filter: { gender: { eq: 'Female' } } })
	);
	/*await API.graphql(graphqlOperation(updateUser, 
		{
			input:
			{
				id: retrieved.data.listUsers.items[0].id,
				gender: "Female"
			}
		}
	));*/

	console.log(
		retrieved.data.listUsers.items.length,
		retrieved.data.listUsers.items[0].name,
		retrieved.data.listUsers.items[0].gender
	);
}

const excludedPathArray = [ '/login' ];

const App = ({ location }) => {
	return (
		<div>
			<SideNav />
			{/* {excludedPathArray.indexOf(location.pathname) < 0 && <SideNav />} */}
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/volunteer" component={Volunteer} exact />
				<Route path="/volunteer/upcoming" component={UpcomingEvent} exact />
				<Route path="/volunteer/events/:eventID" component={ViewEvent} exact />
				<Route path="/volunteer/events/:eventID/generate-teams" component={GenerateTeams} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
