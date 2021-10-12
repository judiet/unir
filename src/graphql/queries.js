/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        avatarUrl
        email
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
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
          author {
            id
            avatarUrl
            email
            name
          }
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
