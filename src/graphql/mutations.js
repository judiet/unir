/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const changeNotificationStatus = /* GraphQL */ `
  mutation ChangeNotificationStatus(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      status
      _version
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      title
      status
      type
      description
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      title
      status
      type
      description
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      title
      status
      type
      description
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      surveyUrl
      mediaUrl
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
      SurveyUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      surveyUrl
      mediaUrl
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
      SurveyUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      title
      surveyCreatedAt
      status
      surveyUrl
      mediaUrl
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
      SurveyUsers {
        nextToken
        startedAt
      }
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
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        nextToken
        startedAt
      }
      UserNotifications {
        nextToken
        startedAt
      }
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
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        nextToken
        startedAt
      }
      UserNotifications {
        nextToken
        startedAt
      }
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
      name
      firstName
      dateOfBirth
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      surveys {
        nextToken
        startedAt
      }
      UserNotifications {
        nextToken
        startedAt
      }
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
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      survey {
        id
        title
        surveyCreatedAt
        status
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
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
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      survey {
        id
        title
        surveyCreatedAt
        status
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
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
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      survey {
        id
        title
        surveyCreatedAt
        status
        surveyUrl
        mediaUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
    }
  }
`;
export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
      id
      userID
      notificationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      notification {
        id
        title
        status
        type
        description
        url
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
    }
  }
`;
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
      id
      userID
      notificationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      notification {
        id
        title
        status
        type
        description
        url
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
    }
  }
`;
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
      id
      userID
      notificationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      notification {
        id
        title
        status
        type
        description
        url
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
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
      username
    }
  }
`;
