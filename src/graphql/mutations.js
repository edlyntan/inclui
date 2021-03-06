/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills
      attendanceScore
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills
      attendanceScore
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      age
      gender
      skills
      attendanceScore
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserTeam = /* GraphQL */ `
  mutation CreateUserTeam(
    $input: CreateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    createUserTeam(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        age
        gender
        skills
        attendanceScore
        teams {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamId
      team {
        id
        name
        event {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserTeam = /* GraphQL */ `
  mutation UpdateUserTeam(
    $input: UpdateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    updateUserTeam(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        age
        gender
        skills
        attendanceScore
        teams {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamId
      team {
        id
        name
        event {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserTeam = /* GraphQL */ `
  mutation DeleteUserTeam(
    $input: DeleteUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    deleteUserTeam(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        age
        gender
        skills
        attendanceScore
        teams {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamId
      team {
        id
        name
        event {
          id
          title
          organizer
          description
          image
          date
          time
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      organizer
      description
      image
      date
      time
      teams {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      volunteers {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      organizer
      description
      image
      date
      time
      teams {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      volunteers {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      organizer
      description
      image
      date
      time
      teams {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      volunteers {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
          createdAt
          updatedAt
        }
        nextToken
      }
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
      event {
        id
        title
        organizer
        description
        image
        date
        time
        teams {
          nextToken
        }
        volunteers {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
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
      event {
        id
        title
        organizer
        description
        image
        date
        time
        teams {
          nextToken
        }
        volunteers {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
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
      event {
        id
        title
        organizer
        description
        image
        date
        time
        teams {
          nextToken
        }
        volunteers {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
