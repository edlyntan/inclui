/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      age
      gender
      skills
      attendanceScore
      teamId
      team {
        id
        name
        skills
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      age
      gender
      skills
      attendanceScore
      teamId
      team {
        id
        name
        skills
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      age
      gender
      skills
      attendanceScore
      teamId
      team {
        id
        name
        skills
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      title
      organizer
      description
      image
      date
      time
      teamId
      userId
      teams {
        items {
          id
          name
          skills
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      title
      organizer
      description
      image
      date
      time
      teamId
      userId
      teams {
        items {
          id
          name
          skills
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      title
      organizer
      description
      image
      date
      time
      teamId
      userId
      teams {
        items {
          id
          name
          skills
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          age
          gender
          skills
          attendanceScore
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      skills
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      skills
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      skills
      createdAt
      updatedAt
    }
  }
`;
