import React from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import './css/Elements.css';

const Page = (props) => {
	return (
		<div className="page">
			<div className="page-content">{props.children}</div>
		</div>
	);
};

const PageTitle = (props) => {
	return <h1 className="page-title">{props.children}</h1>;
};

const SectionTitle = (props) => {
	return <h2 className="page-section-title">{props.children}</h2>;
};

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

const FormButton = (props) => {
	return (
		<button type={props.type || 'button'} className={`form-button ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

const MenuButton = (props) => {
	return (
		<button type="button" className={`menu-button ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

const OptionsButton = (props) => {
	return (
		<button type="button" className={`options-button ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

const EventTag = (props) => {
	let tagCatClass;
	switch (props.category) {
		case 'Refugees':
			tagCatClass = 'dark-purple';
			break;
		case 'Women':
			tagCatClass = 'purple';
			break;
		default:
			console.error('Error: props.tagCat out of bounds');
	}
	return <div className={`event-tag ${tagCatClass}`}>{props.category}</div>;
};

const EventPost = (props) => {
	return (
		<div className="eventpost-card" key={props.id}>
			{props.image && (
				<div className="eventpost-image-container">
					<img src={props.image} alt={props.alt || ''} />
				</div>
			)}
			<div className="eventpost-text-container">
				<p className="eventpost-title">{props.title}</p>
				<p className="eventpost-date">{props.date}</p>
				<p className="eventpost-time">{props.time}</p>
				<div className="gen-margin-container">
					<p className="eventpost-short-desc">{props.desc}</p>
				</div>
				<div className="eventpost-tag-container">{props.children}</div>
			</div>
		</div>
	);
};

const FlexContainer = (props) => {
	return <div className="gen-flex-container">{props.children}</div>;
};

const FormInput = (props) => {
	return (
		<div className="form-input">
			<label htmlFor={props.item}>{props.item.charAt(0).toUpperCase() + props.item.substring(1)}</label>
			<input id={props.item} name={props.item} type={props.type || props.item} onChange={props.onChange} />
		</div>
	);
};

const FormTextArea = (props) => {
	return (
		<div className="form-input">
			<label htmlFor={props.item}>{props.item.charAt(0).toUpperCase() + props.item.substring(1)}</label>
			<textarea id={props.item} name={props.item} onChange={props.onChange} />
		</div>
	);
};

export {
	Page,
	PageTitle,
	SectionTitle,
	SideNav,
	FormButton,
	MenuButton,
	OptionsButton,
	EventTag,
	EventPost,
	FlexContainer,
	FormInput,
	FormTextArea
};

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
// import './css/Elements.css';

// const Page = (props) => {
// 	return (
// 		<div className="page">
// 			<div className="page-content">{props.children}</div>
// 		</div>
// 	);
// };

// const PageTitle = (props) => {
// 	return <h1 className="page-title">{props.children}</h1>;
// };

// const SectionTitle = (props) => {
// 	return <h2 className="page-section-title">{props.children}</h2>;
// };

// const SideNav = () => {
// 	return (
// 		<div className="sidenav">
// 			<Link to="/">
// 				<div>Home</div>
// 			</Link>
// 			<Link to="/volunteer">
// 				<div>Volunteer</div>
// 			</Link>
// 			<div>Contribute</div>
// 			<div>Shop</div>
// 			<div>Profile</div>
// 			<AmplifySignOut />
// 		</div>
// 	);
// };

// const FormButton = (props) => {
// 	return (
// 		<button type={props.type || 'button'} className={`form-button ${props.className}`} onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

// const MenuButton = (props) => {
// 	return (
// 		<button type="button" className={`menu-button ${props.className}`} onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

// const OptionsButton = (props) => {
// 	return (
// 		<button type="button" className={`options-button ${props.className}`} onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

// const EventTag = (props) => {
// 	let tagCatClass;
// 	switch (props.category) {
// 		case 'Refugees':
// 			tagCatClass = 'dark-purple';
// 			break;
// 		case 'Women':
// 			tagCatClass = 'purple';
// 			break;
// 		default:
// 			console.error('Error: props.tagCat out of bounds');
// 	}
// 	return <div className={`event-tag ${tagCatClass}`}>{props.category}</div>;
// };

// const EventPost = (props) => {
// 	return (
// 		<div className="eventpost-card" key={props.id}>
// 			{props.image && (
// 				<div className="eventpost-image-container">
// 					<img src={props.image} alt={props.alt || ''} />
// 				</div>
// 			)}
// 			<div className="eventpost-text-container">
// 				<p className="eventpost-title">{props.title}</p>
// 				<p className="eventpost-date">{props.date}</p>
// 				<p className="eventpost-time">{props.time}</p>
// 				<div className="gen-margin-container">
// 					<p className="eventpost-short-desc">{props.desc}</p>
// 				</div>
// 				<div className="eventpost-tag-container">
// 					<p>{props.children}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const FlexContainer = (props) => {
// 	return <div className="gen-flex-container">{props.children}</div>;
// };

// const FormInput = (props) => {
// 	return (
// 		<div>
// 			<label htmlFor={props.item}>{props.item.charAt(0).toUpperCase() + props.item.substring(1)}</label>
// 			<input id={props.item} name={props.item} type={props.type || props.item} onChange={props.onChange} />
// 		</div>
// 	);
// };

// const FormTextArea = (props) => {
// 	return (
// 		<div>
// 			<label htmlFor={props.item}>{props.item.charAt(0).toUpperCase() + props.item.substring(1)}</label>
// 			<textarea id={props.item} name={props.item} onChange={props.onChange} />
// 		</div>
// 	);
// };

// export {
// 	Page,
// 	PageTitle,
// 	SectionTitle,
// 	SideNav,
// 	FormButton,
// 	MenuButton,
// 	OptionsButton,
// 	EventTag,
// 	EventPost,
// 	FlexContainer,
// 	FormInput,
// 	FormTextArea
// };
