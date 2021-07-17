/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createVolunteer = /* GraphQL */ `
  mutation CreateVolunteer(
    $input: CreateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    createVolunteer(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateVolunteer = /* GraphQL */ `
  mutation UpdateVolunteer(
    $input: UpdateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    updateVolunteer(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteVolunteer = /* GraphQL */ `
  mutation DeleteVolunteer(
    $input: DeleteVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    deleteVolunteer(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNGO = /* GraphQL */ `
  mutation CreateNGO(
    $input: CreateNGOInput!
    $condition: ModelNGOConditionInput
  ) {
    createNGO(input: $input, condition: $condition) {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNGO = /* GraphQL */ `
  mutation UpdateNGO(
    $input: UpdateNGOInput!
    $condition: ModelNGOConditionInput
  ) {
    updateNGO(input: $input, condition: $condition) {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNGO = /* GraphQL */ `
  mutation DeleteNGO(
    $input: DeleteNGOInput!
    $condition: ModelNGOConditionInput
  ) {
    deleteNGO(input: $input, condition: $condition) {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
