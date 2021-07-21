/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserTeam = /* GraphQL */ `
  query GetUserTeam($id: ID!) {
    getUserTeam(id: $id) {
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
        skills
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          name
          age
          gender
          skills
          attendanceScore
          createdAt
          updatedAt
        }
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
          skills
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      skills
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        skills
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
      nextToken
    }
  }
`;
export const usersByAttendance = /* GraphQL */ `
  query UsersByAttendance(
    $attendanceScore: Int
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByAttendance(
      attendanceScore: $attendanceScore
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
