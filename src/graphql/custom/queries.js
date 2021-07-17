// export const getVolunteerByAge = /* GraphQL */ `
//   query GetVolunteerByAge($monster: String!) {
//     getVolunteerByAge(age: $monster) {
//       id
//       name
//       age
//       gender
//       createdAt
//       updatedAt
//     }
//   }
// `;

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
