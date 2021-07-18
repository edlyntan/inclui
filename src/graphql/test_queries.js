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

export const OnlyUsedForExport = /* GraphQL */ `
  query ThisDoesNotMatter(
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
