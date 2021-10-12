/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSurveys = /* GraphQL */ `
  subscription OnCreateSurveys {
    onCreateSurveys {
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
export const onUpdateSurveys = /* GraphQL */ `
  subscription OnUpdateSurveys {
    onUpdateSurveys {
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
export const onDeleteSurveys = /* GraphQL */ `
  subscription OnDeleteSurveys {
    onDeleteSurveys {
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
export const onCreateSurveyUser = /* GraphQL */ `
  subscription OnCreateSurveyUser {
    onCreateSurveyUser {
      id
      surveyID
      participantID
      survey {
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
export const onUpdateSurveyUser = /* GraphQL */ `
  subscription OnUpdateSurveyUser {
    onUpdateSurveyUser {
      id
      surveyID
      participantID
      survey {
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
export const onDeleteSurveyUser = /* GraphQL */ `
  subscription OnDeleteSurveyUser {
    onDeleteSurveyUser {
      id
      surveyID
      participantID
      survey {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String!) {
    onCreateUser(username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String!) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String!) {
    onDeleteUser(username: $username) {
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
