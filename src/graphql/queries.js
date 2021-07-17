/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVolunteer = /* GraphQL */ `
  query GetVolunteer($id: ID!) {
    getVolunteer(id: $id) {
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
export const listVolunteers = /* GraphQL */ `
  query ListVolunteers(
    $filter: ModelVolunteerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVolunteers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNGO = /* GraphQL */ `
  query GetNGO($id: ID!) {
    getNGO(id: $id) {
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
export const listNGOS = /* GraphQL */ `
  query ListNGOS(
    $filter: ModelNGOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNGOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
      nextToken
    }
  }
`;
