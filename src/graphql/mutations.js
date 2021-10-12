/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      name
      avatarUrl
      email
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      name
      avatarUrl
      email
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      name
      avatarUrl
      email
      createdAt
      updatedAt
      username
    }
  }
`;
export const createSurveys = /* GraphQL */ `
  mutation CreateSurveys(
    $input: CreateSurveysInput!
    $condition: ModelSurveysConditionInput
  ) {
    createSurveys(input: $input, condition: $condition) {
      id
      title
      authorId
      author {
        id
        name
        avatarUrl
        email
        createdAt
        updatedAt
        username
      }
      surveyCreatedAt
      surveyUrl
      status
      participants {
        items {
          id
          surveyID
          participantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      username
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
      authorId
      author {
        id
        name
        avatarUrl
        email
        createdAt
        updatedAt
        username
      }
      surveyCreatedAt
      surveyUrl
      status
      participants {
        items {
          id
          surveyID
          participantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      username
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
      authorId
      author {
        id
        name
        avatarUrl
        email
        createdAt
        updatedAt
        username
      }
      surveyCreatedAt
      surveyUrl
      status
      participants {
        items {
          id
          surveyID
          participantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const createSurveyUser = /* GraphQL */ `
  mutation CreateSurveyUser(
    $input: CreateSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    createSurveyUser(input: $input, condition: $condition) {
      id
      surveyID
      participantID
      survey {
        id
        title
        authorId
        author {
          id
          name
          avatarUrl
          email
          createdAt
          updatedAt
          username
        }
        surveyCreatedAt
        surveyUrl
        status
        participants {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      participant {
        id
        username
        email
        surveys {
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
export const updateSurveyUser = /* GraphQL */ `
  mutation UpdateSurveyUser(
    $input: UpdateSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    updateSurveyUser(input: $input, condition: $condition) {
      id
      surveyID
      participantID
      survey {
        id
        title
        authorId
        author {
          id
          name
          avatarUrl
          email
          createdAt
          updatedAt
          username
        }
        surveyCreatedAt
        surveyUrl
        status
        participants {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      participant {
        id
        username
        email
        surveys {
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
export const deleteSurveyUser = /* GraphQL */ `
  mutation DeleteSurveyUser(
    $input: DeleteSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    deleteSurveyUser(input: $input, condition: $condition) {
      id
      surveyID
      participantID
      survey {
        id
        title
        authorId
        author {
          id
          name
          avatarUrl
          email
          createdAt
          updatedAt
          username
        }
        surveyCreatedAt
        surveyUrl
        status
        participants {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      participant {
        id
        username
        email
        surveys {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      surveys {
        items {
          id
          surveyID
          participantID
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
      username
      email
      surveys {
        items {
          id
          surveyID
          participantID
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
      username
      email
      surveys {
        items {
          id
          surveyID
          participantID
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
