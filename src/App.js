import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNav } from './components/Elements';
import Volunteer from './components/volunteer/Home';
import UpcomingEvent from './components/volunteer/UpcomingEvent';
import ViewEvent from './components/volunteer/ViewEvent';
import GenerateTeams from './components/volunteer/GenerateTeams';
// import Notes from './components/Notes';
import './App.css';

const App = () => {
	return (
		<div>
			<SideNav />
			<Switch>
				<Route path="/volunteer" component={Volunteer} exact />
				<Route path="/volunteer/upcoming" component={UpcomingEvent} exact />
				<Route path="/volunteer/events/:eventID" component={ViewEvent} exact />
				<Route path="/volunteer/events/:eventID/generate-teams" component={GenerateTeams} />
				{/* <Route path="/notes" component={Notes} exact /> */}
			</Switch>
		</div>
	);
};

export default App;
