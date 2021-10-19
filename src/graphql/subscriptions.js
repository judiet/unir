/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse {
    onCreateResponse {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse {
    onUpdateResponse {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse {
    onDeleteResponse {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey {
    onCreateSurvey {
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
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey {
    onUpdateSurvey {
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
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey {
    onDeleteSurvey {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
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
