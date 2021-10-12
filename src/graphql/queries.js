/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getSurveysByUser = /* GraphQL */ `
query GetSurveysByUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    surveys {
      items {
        survey {
          surveyUrl
          status
          title
          username
          surveyCreatedAt
          author
          id
        }
      }
    }
  }
}
`;

export const getSurveys = /* GraphQL */ `
  query GetSurveys($id: ID!) {
    getSurveys(id: $id) {
      id
      title
      author
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
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        surveys {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
