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
export const createSample = /* GraphQL */ `
  mutation CreateSample(
    $input: CreateSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    createSample(input: $input, condition: $condition) {
      id
      name
      random
      createdAt
      updatedAt
    }
  }
`;
export const updateSample = /* GraphQL */ `
  mutation UpdateSample(
    $input: UpdateSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    updateSample(input: $input, condition: $condition) {
      id
      name
      random
      createdAt
      updatedAt
    }
  }
`;
export const deleteSample = /* GraphQL */ `
  mutation DeleteSample(
    $input: DeleteSampleInput!
    $condition: ModelSampleConditionInput
  ) {
    deleteSample(input: $input, condition: $condition) {
      id
      name
      random
      createdAt
      updatedAt
    }
  }
`;
export const createThing = /* GraphQL */ `
  mutation CreateThing(
    $input: CreateThingInput!
    $condition: ModelThingConditionInput
  ) {
    createThing(input: $input, condition: $condition) {
      id
      name
      ok
      createdAt
      updatedAt
    }
  }
`;
export const updateThing = /* GraphQL */ `
  mutation UpdateThing(
    $input: UpdateThingInput!
    $condition: ModelThingConditionInput
  ) {
    updateThing(input: $input, condition: $condition) {
      id
      name
      ok
      createdAt
      updatedAt
    }
  }
`;
export const deleteThing = /* GraphQL */ `
  mutation DeleteThing(
    $input: DeleteThingInput!
    $condition: ModelThingConditionInput
  ) {
    deleteThing(input: $input, condition: $condition) {
      id
      name
      ok
      createdAt
      updatedAt
    }
  }
`;
