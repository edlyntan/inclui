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
