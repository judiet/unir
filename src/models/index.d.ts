import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SurveyStatus {
  DONE = "DONE",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}



type SurveysMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveysUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Surveys {
  readonly id: string;
  readonly title?: string;
  readonly surveyCreatedAt?: string;
  readonly status?: SurveyStatus | keyof typeof SurveyStatus;
  readonly authorsID?: string;
  readonly Authors?: Authors;
  readonly SurveysUsers?: (SurveysUsers | null)[];
  readonly surveyUrl?: string;
  readonly mediaUrl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Surveys, SurveysMetaData>);
  static copyOf(source: Surveys, mutator: (draft: MutableModel<Surveys, SurveysMetaData>) => MutableModel<Surveys, SurveysMetaData> | void): Surveys;
}

export declare class Authors {
  readonly id: string;
  readonly firstName?: string;
  readonly name?: string;
  readonly email?: string;
  readonly avatarUrl?: string;
  readonly Surveys?: (Surveys | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}

export declare class SurveysUsers {
  readonly id: string;
  readonly surveys: Surveys;
  readonly users: Users;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SurveysUsers, SurveysUsersMetaData>);
  static copyOf(source: SurveysUsers, mutator: (draft: MutableModel<SurveysUsers, SurveysUsersMetaData>) => MutableModel<SurveysUsers, SurveysUsersMetaData> | void): SurveysUsers;
}

export declare class Users {
  readonly id: string;
  readonly email?: string;
  readonly username?: string;
  readonly name?: string;
  readonly firstName?: string;
  readonly dateOfBirth?: string;
  readonly surveyss?: (SurveysUsers | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}