import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import { Page, PageTitle, FormButton } from '../Elements';
import { addTeam, fetchUserTeams, updateTeam } from '../../api/api';

const GenerateTeams = () => {
	const history = useHistory();

	const [ userTeams, setUserTeams ] = useState([]);

	useEffect(() => (async () => setUserTeams(await fetchUserTeams()))(), []);

	const [ numOfTeams, setNumOfTeams ] = useState(0);
	const [ teamsInfo, setTeamsInfo ] = useState([]);
	const [ uniqueSkills, setUniqueSkills ] = useState([]);

	useEffect(
		() => {
			if (userTeams[0]) {
				let uniqueSkillsCopy = [ ...uniqueSkills ];
				for (let i = 0; i < userTeams.length; i++) {
					uniqueSkillsCopy.push(userTeams[i].user.skills);
				}
				uniqueSkillsCopy = uniqueSkillsCopy.flat();
				uniqueSkillsCopy = uniqueSkillsCopy.filter((v, i) => uniqueSkillsCopy.indexOf(v) === i);

				setUniqueSkills(uniqueSkillsCopy);
			}
		},
		[ userTeams ]
	);

	useEffect(
		() => {
			console.log('uniqueSkills', uniqueSkills);
		},
		[ uniqueSkills ]
	);

	useEffect(
		() => {
			if (userTeams[0]) {
				console.log('userTeams', userTeams[1].user.skills, userTeams);
				// console.log('USERTEAMS LENGTH', userTeams.length);
			}
		},
		[ userTeams ]
	);

	useEffect(() => {
		const promptAns = window.prompt('How many teams would you like to have?');
		setNumOfTeams(promptAns);
	}, []);

	useEffect(
		() => {
			let placeholder = [];
			for (let i = 0; i < numOfTeams; i++) {
				placeholder.push({ name: i + 1, skills: [] });
			}
			setTeamsInfo(placeholder);
		},
		[ numOfTeams ]
	);

	const handleChangeNumber = (e) => {
		e.persist();
		const key = e.target.name;
		const value = e.target.value;
		const teamsInfoCopy = [ ...teamsInfo ];
		const newTeamsInfo = teamsInfoCopy.map((teamInfo) => {
			return {
				...teamInfo,
				num_of_particpants: teamInfo.name.toString() === key ? value : teamInfo.num_of_particpants
			};
		});
		setTeamsInfo(newTeamsInfo);
	};

	const handleChangeSkills = (e) => {
		e.persist();
		const key = e.target.name;
		const value = e.target.value;
		const teamsInfoCopy = [ ...teamsInfo ];
		const newTeamsInfo = teamsInfoCopy.map((teamInfo) => {
			return {
				...teamInfo,
				skills: teamInfo.name.toString() === key ? [ value ] : teamInfo.skills
			};
		});
		setTeamsInfo(newTeamsInfo);
	};

	// useEffect(() => {
	// 	(async () => {
	// 		const i = [ 'TWO', 'b' ];
	// 		let smtg = await addTeam(1, i);
	// 		console.log(smtg);
	// 	})();
	// }, []);

	// i iterates through teamsInfo individually
	// j iterates through i skills
	// k iterates thru da

	const doEverything = async () => {
		//assign by skill
		for (let i = 0; i < teamsInfo.length; i++) {
			if (i === 0) teamsInfo[i].id = '90737396-f2dc-4100-892c-9877a0b2b7f6';
			else teamsInfo[i].id = await addTeam(teamsInfo[i].name, teamsInfo[i].skills);
			console.log('THIS RUNS AFTER', teamsInfo[i].id);
			if (teamsInfo[i].skills.length > 0) {
				for (let j = 0; j < teamsInfo[i].skills.length; j++) {
					for (let k = 0; k < userTeams.length; k++) {
						if (userTeams[k].user.skills.indexOf(teamsInfo[i].skills[j]) !== -1 && !userTeams[k].assigned) {
							userTeams[k].teamId = teamsInfo[i].id;
							userTeams[k] = await updateTeam(userTeams[k].id, teamsInfo[i].id);
							userTeams[k].assigned = true;
						}
					}
				}
			}
		}
		//assign by attendance
		userTeams.sort(function(a, b) {
			return b.user.attendanceScore - a.user.attendanceScore;
		});
		for (let m = 0; m < userTeams.length; m++) {
			if (!userTeams[m].assigned) {
				let teamNum = m % numOfTeams;
				userTeams[m] = await updateTeam(userTeams[m].id, teamsInfo[teamNum].id);
				userTeams[m].teamId = teamsInfo[teamNum].id;
			}
		}
		console.log(userTeams);
	};

	useEffect(
		() => {
			if (('teamsInfo', teamsInfo[0])) console.log(teamsInfo, teamsInfo[0].skills);
		},
		[ teamsInfo ]
	);

	return (
		<Page>
			<PageTitle>Generate Teams for Name</PageTitle>
			{teamsInfo.length > 0 &&
				teamsInfo.map((teamInfo) => {
					return (
						<div key={teamInfo.name}>
							<div>{teamInfo.name}</div>
							<div>
								<input
									type="text"
									name={teamInfo.name}
									value={teamInfo.num_of_particpants || ''}
									onChange={handleChangeNumber}
								/>
							</div>
							<div>
								<select
									name={teamInfo.name}
									value={teamInfo.skills || []}
									onChange={handleChangeSkills}
									multiple
								>
									<option value={[]} key={[]} disabled hidden>
										--
									</option>
									{uniqueSkills &&
										uniqueSkills.map((skill) => {
											return (
												<option value={skill} key={skill}>
													{skill}
												</option>
											);
										})}
								</select>
							</div>
						</div>
					);
				})}
			<FormButton onClick={() => history.go(-1)}>Cancel</FormButton>
			<FormButton
				onClick={() => {
					doEverything();
					history.go(-1);
				}}
			>
				Confirm
			</FormButton>
		</Page>
	);
};

export default withAuthenticator(GenerateTeams);
