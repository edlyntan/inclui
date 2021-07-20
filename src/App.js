import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNav } from './components/Elements';
import Main from './components/Main';
import Volunteer from './components/volunteer/Home';
import UpcomingEvent from './components/volunteer/UpcomingEvent';
import ViewEvent from './components/volunteer/ViewEvent';
import GenerateTeams from './components/volunteer/GenerateTeams';
import './App.css';

import Amplify, { API, graphqlOperation, input} from 'aws-amplify';
import {createUser, createTeam, createUserTeam, createEvent} from "./graphql/mutations";
import { updateUser, updateTeam, updateUserTeam, updateEvent } from './graphql/mutations';
import { listUsers, listTeams, listUserTeams, listEvents } from './graphql/queries';
import { getUser,  getTeam, getUserTeam, getEvent} from './graphql/queries';
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const users = [
	{name: "Adam ", 		age: 23, gender: "Male", 	skills: ["Plumbing", "Malay"], 							attendanceScore: 99},
	{name: "Brenda", 		age: 45, gender: "Female", 	skills: ["Carpentry"], 									attendanceScore: 90},
	{name: "Charles", 		age: 19, gender: "Male", 	skills: [], 											attendanceScore: 100},
	{name: "Daryl", 		age: 65, gender: "Male", 	skills: ["Teaching", "Arabic"], 						attendanceScore: 60},
	{name: "Earl", 			age: 21, gender: "Male", 	skills: ["Malay", "First Aid"], 						attendanceScore: 92},
	{name: "Fiona", 		age: 18, gender: "Female", 	skills: ["Cooking", "Teaching", "Tamil", "Masonry"], 	attendanceScore: 50},
	{name: "Gina", 			age: 51, gender: "Female", 	skills: ["Carpentry", "Burmese"], 						attendanceScore: 100},
	{name: "Helen", 		age: 36, gender: "Female", 	skills: ["Teaching"], 									attendanceScore: 45},
	{name: "Ian", 			age: 29, gender: "Male", 	skills: ["Cooking", "Tamil"], 							attendanceScore: 100},
	{name: "Jessica", 		age: 27, gender: "Female", 	skills: [], 											attendanceScore: 80},
	{name: "Kate", 			age: 40, gender: "Female", 	skills: [], 											attendanceScore: 100},
	{name: "Leonard", 		age: 20, gender: "Male", 	skills: [], 											attendanceScore: 100},
	{name: "Mia", 			age: 39, gender: "Female", 	skills: ["Sewing", "First Aid"],						attendanceScore: 100},
	{name: "Noel", 			age: 28, gender: "Female", 	skills: [], 											attendanceScore: 100},
	{name: "Oliver", 		age: 46, gender: "Male", 	skills: [], 											attendanceScore: 100}
];

const events = [
	{
		title: "Foodbank Friday @ Gombak", 
		organizer: "New Hope House", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nisl in nisl vestibulum hendrerit. In ac odio et mi fringilla rutrum. Nam in urna non lacus ultrices volutpat sed nec neque. Donec feugiat viverra risus, ut tempus diam condimentum non. Suspendisse vel ante id lacus commodo laoreet.", 	
		date: "02-12-2022", 	
		time:"10:00am-15:30pm"
	},
	{
		title: "Open Doggo Day", 
		organizer: "New Hope House", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nisl in nisl vestibulum hendrerit. In ac odio et mi fringilla rutrum. Nam in urna non lacus ultrices volutpat sed nec neque. Donec feugiat viverra risus, ut tempus diam condimentum non. Suspendisse vel ante id lacus commodo laoreet.", 	
		date: "04-11-2022", 	
		time:"13:00pm-18:00pm"
	},
	{
		title: "KL Street Feeding", 
		organizer: "New Hope House", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nisl in nisl vestibulum hendrerit. In ac odio et mi fringilla rutrum. Nam in urna non lacus ultrices volutpat sed nec neque. Donec feugiat viverra risus, ut tempus diam condimentum non. Suspendisse vel ante id lacus commodo laoreet.", 	
		date: "02-12-2022", 	
		time:"10:00am-15:30pm"
	},
];


async function fetchUsers(){
	let retrieved = [];	
	retrieved = await API.graphql(graphqlOperation(listUsers));
	await API.graphql(graphqlOperation(updateUser, 
		{
			input:
			{
				id: retrieved.data.listUsers.items[0].id,
				gender: "Female"
			}
		}
	));

	console.log(
		retrieved.data.listUsers.items[0].id, 
		retrieved.data.listUsers.items[0].gender);
}

/* temporary. remove comments, and duplicate entries get inserted
(async function (){
	for (var i=0; i<events.length; i++){
		await API.graphql(graphqlOperation(createEvent, {input:events[i]}));
	}
})();

(async function(){
	for (var i=0; i<users.length; i++){
		await API.graphql(graphqlOperation(createUser, {input:users[i]}));
	}
})();
*/


const App = () => {
	return (
		<div>
			<SideNav />
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

export default App;
