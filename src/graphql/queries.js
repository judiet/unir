/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getNotificationByUserID = /* GraphQL */ `
query GetNotificationByUserID($id: ID!) {
  listNotifications(filter: {userID: {eq: $id}}) {
    items {
      status
      id
      title
      _deleted
      _version
      userID
      updatedAt
      type
      description
      createdAt
      Survey {
        surveyUrl
        title
      }
    }
  }
}
`;
export const getSurveyOfUser = /* GraphQL */ `
query GetSurveyOfUser {
  listUsers {
    items {
      email
      firstName
      name
      updatedAt
      username
      id
      dateOfBirth
      surveys {
        items {
          survey {
            id
            mediaUrl
            status
            surveyCreatedAt
            surveyUrl
            title
            Author {
              id
              name
              firstName
              email
              avatarUrl
            }
            _deleted
          }
        }
      }
    }
  }
}

`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      title
      userID
      status
      type
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        userID
        status
        type
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        userID
        status
        type
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      data
      surveyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        username
        email
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
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        surveyID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        data
        surveyID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      title
      surveyCreatedAt
      status
      surveyUrl
      mediaUrl
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Responses {
        nextToken
        startedAt
      }
      Author {
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
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        surveyCreatedAt
        status
        surveyUrl
        mediaUrl
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSurveys = /* GraphQL */ `
  query SyncSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSurveys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        surveyCreatedAt
        status
        surveyUrl
        mediaUrl
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Notifications {
        nextToken
        startedAt
      }
      Surveys {
        nextToken
        startedAt
      }
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
        name
        firstName
        dateOfBirth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        name
        firstName
        dateOfBirth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
