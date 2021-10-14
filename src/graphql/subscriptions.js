/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSurveys = /* GraphQL */ `
  subscription OnCreateSurveys {
    onCreateSurveys {
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
export const onUpdateSurveys = /* GraphQL */ `
  subscription OnUpdateSurveys {
    onUpdateSurveys {
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
export const onDeleteSurveys = /* GraphQL */ `
  subscription OnDeleteSurveys {
    onDeleteSurveys {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateAuthors = /* GraphQL */ `
  subscription OnCreateAuthors {
    onCreateAuthors {
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
export const onUpdateAuthors = /* GraphQL */ `
  subscription OnUpdateAuthors {
    onUpdateAuthors {
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
export const onDeleteAuthors = /* GraphQL */ `
  subscription OnDeleteAuthors {
    onDeleteAuthors {
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
export const onCreateSurveysUsers = /* GraphQL */ `
  subscription OnCreateSurveysUsers {
    onCreateSurveysUsers {
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
export const onUpdateSurveysUsers = /* GraphQL */ `
  subscription OnUpdateSurveysUsers {
    onUpdateSurveysUsers {
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
export const onDeleteSurveysUsers = /* GraphQL */ `
  subscription OnDeleteSurveysUsers {
    onDeleteSurveysUsers {
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
