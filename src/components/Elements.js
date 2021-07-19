import React from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import './css/Elements.css';

const SideNav = () => {
	return (
		<div className="sidenav">
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/volunteer">
				<div>Volunteer</div>
			</Link>
			<div>Contribute</div>
			<div>Shop</div>
			<div>Profile</div>
			<AmplifySignOut />
		</div>
	);
};

const FormButton = () => {
	return <div />;
};

const MenuButton = (props) => {
	return (
		<button className="menu-button" type="button" onClick={props.onClick}>
			{props.children}
		</button>
	);
};

const OptionsButton = () => {};

const EventPost = (props) => {
	return (
		<div className={props.className}>
			<div className="eventpost-image">Image</div>
			<p className="eventpost-title">Event Title</p>
			<p className="eventpost-date">Date</p>
			<div className="gen-margin-container">
				<p className="eventpost-short-desc">Short Description</p>
				<p className="eventpost-num-participants">Number of Participants</p>
			</div>
			<p className="eventpost-tags">Tags</p>
		</div>
	);
};

const LinkedEventPost = (props) => {
	return (
		<React.Fragment>
			{props.linked ? (
				<Link className="eventpost-card" to={props.link}>
					<EventPost />
				</Link>
			) : (
				<EventPost className="eventpost-card" />
			)}
		</React.Fragment>
	);
};

const FlexContainer = (props) => {
	return <div className="gen-flex-container">{props.children}</div>;
};

export { LinkedEventPost, FlexContainer, SideNav };
