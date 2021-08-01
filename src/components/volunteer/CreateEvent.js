import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Page, PageTitle, FormInput, FormButton } from '../Elements';

const CreateEvent = () => {
	const [ formData, setFormData ] = useState({});

	const handleFormChanged = (e) => {
		e.persist();
		let smtg = e.target.name;
		const formDataCopy = { ...formData };
		setFormData({ ...formDataCopy, [smtg]: smtg });
	};

	return (
		<Page>
			<PageTitle>Create Event</PageTitle>
			<FormInput item="title" type="text" onChange={handleFormChanged} />
			<FormInput item="date" onChange={handleFormChanged} />
			<FormInput item="time" onChange={handleFormChanged} />
			<FormInput item="description" type="text" onChange={handleFormChanged} />
			<FormButton>OK</FormButton>
			<FormButton>SO WHAT</FormButton>
		</Page>
	);
};

export default withAuthenticator(CreateEvent);
