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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserTeam = /* GraphQL */ `
  subscription OnCreateUserTeam {
    onCreateUserTeam {
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
export const onUpdateUserTeam = /* GraphQL */ `
  subscription OnUpdateUserTeam {
    onUpdateUserTeam {
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
export const onDeleteUserTeam = /* GraphQL */ `
  subscription OnDeleteUserTeam {
    onDeleteUserTeam {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
