/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurveys = /* GraphQL */ `
  mutation CreateSurveys(
    $input: CreateSurveysInput!
    $condition: ModelSurveysConditionInput
  ) {
    createSurveys(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      authorsID
      surveyUrl
      mediaUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Authors {
        id
        firstName
        name
        email
        avatarUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      SurveysUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateSurveys = /* GraphQL */ `
  mutation UpdateSurveys(
    $input: UpdateSurveysInput!
    $condition: ModelSurveysConditionInput
  ) {
    updateSurveys(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      authorsID
      surveyUrl
      mediaUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Authors {
        id
        firstName
        name
        email
        avatarUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      SurveysUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteSurveys = /* GraphQL */ `
  mutation DeleteSurveys(
    $input: DeleteSurveysInput!
    $condition: ModelSurveysConditionInput
  ) {
    deleteSurveys(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      authorsID
      surveyUrl
      mediaUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Authors {
        id
        firstName
        name
        email
        avatarUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      SurveysUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      email
      username
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveyss {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      email
      username
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveyss {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      email
      username
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveyss {
        nextToken
        startedAt
      }
    }
  }
`;
export const createAuthors = /* GraphQL */ `
  mutation CreateAuthors(
    $input: CreateAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    createAuthors(input: $input, condition: $condition) {
      id
      firstName
      name
      email
      avatarUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Surveys {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAuthors = /* GraphQL */ `
  mutation UpdateAuthors(
    $input: UpdateAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    updateAuthors(input: $input, condition: $condition) {
      id
      firstName
      name
      email
      avatarUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Surveys {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAuthors = /* GraphQL */ `
  mutation DeleteAuthors(
    $input: DeleteAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    deleteAuthors(input: $input, condition: $condition) {
      id
      firstName
      name
      email
      avatarUrl
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Surveys {
        nextToken
        startedAt
      }
    }
  }
`;
export const createSurveysUsers = /* GraphQL */ `
  mutation CreateSurveysUsers(
    $input: CreateSurveysUsersInput!
    $condition: ModelSurveysUsersConditionInput
  ) {
    createSurveysUsers(input: $input, condition: $condition) {
      id
      surveysID
      usersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        id
        title
        surveyCreatedAt
        status
        authorsID
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        id
        email
        username
        name
        firstName
        dateOfBirth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateSurveysUsers = /* GraphQL */ `
  mutation UpdateSurveysUsers(
    $input: UpdateSurveysUsersInput!
    $condition: ModelSurveysUsersConditionInput
  ) {
    updateSurveysUsers(input: $input, condition: $condition) {
      id
      surveysID
      usersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        id
        title
        surveyCreatedAt
        status
        authorsID
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        id
        email
        username
        name
        firstName
        dateOfBirth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteSurveysUsers = /* GraphQL */ `
  mutation DeleteSurveysUsers(
    $input: DeleteSurveysUsersInput!
    $condition: ModelSurveysUsersConditionInput
  ) {
    deleteSurveysUsers(input: $input, condition: $condition) {
      id
      surveysID
      usersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        id
        title
        surveyCreatedAt
        status
        authorsID
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        id
        email
        username
        name
        firstName
        dateOfBirth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
