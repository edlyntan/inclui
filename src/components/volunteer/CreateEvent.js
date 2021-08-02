import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { Page, PageTitle, FormInput, FormButton, FormTextArea } from '../Elements';
import { addEvent } from '../../api/api';
const CreateEvent = () => {
	const history = useHistory();
	const [ formData, setFormData ] = useState({});

	useEffect(
		() => {
			console.log(formData);
		},
		[ formData ]
	);

	const handleFormChanged = (e) => {
		e.persist();
		let key = e.target.name;
		let value = e.target.value;
		const formDataCopy = { ...formData };
		setFormData({ ...formDataCopy, [key]: value });
	};

	const handleFileChanged = async (e) => {
		const files = e.target.files;
		if (files) {
			if (!files[0]) return;
			const file = files[0];
			setFormData({ ...formData, image: file.name });
			await Storage.put(file.name, file);
		}
	};

	return (
		<Page>
			<PageTitle>Create Event</PageTitle>
			<FormInput item="title" type="text" onChange={handleFormChanged} />
			<label htmlFor="file">Image</label>
			<input id="file" type="file" onChange={handleFileChanged} />
			<FormInput item="date" onChange={handleFormChanged} />
			<FormInput type="time" item="startTime" onChange={handleFormChanged} />
			<FormInput type="time" item="endTime" onChange={handleFormChanged} />
			<FormTextArea item="description" type="text" onChange={handleFormChanged} />
			<FormButton onClick={() => history.go(-1)}>Cancel</FormButton>
			<FormButton
				onClick={() => {
					addEvent(formData);
					history.go(-1);
				}}
			>
				Confirm
			</FormButton>
		</Page>
	);
};

export default withAuthenticator(CreateEvent);
