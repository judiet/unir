import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SurveyStatus {
  DONE = "DONE",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}



type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Author {
  readonly id: string;
  readonly firstName?: string;
  readonly name?: string;
  readonly email?: string;
  readonly avatarUrl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

export declare class Survey {
  readonly id: string;
  readonly title?: string;
  readonly surveyCreatedAt?: string;
  readonly status?: SurveyStatus | keyof typeof SurveyStatus;
  readonly surveyUrl?: string;
  readonly mediaUrl?: string;
  readonly userID?: string;
  readonly Author?: Author;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Survey, SurveyMetaData>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey, SurveyMetaData>) => MutableModel<Survey, SurveyMetaData> | void): Survey;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly email?: string;
  readonly name?: string;
  readonly firstName?: string;
  readonly dateOfBirth?: string;
  readonly Surveys?: (Survey | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}