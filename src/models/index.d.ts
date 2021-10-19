import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NotificationType {
  CHAT_MESSAGE = "CHAT_MESSAGE",
  ORDER_PLACED = "ORDER_PLACED",
  ORDER_SHIPPED = "ORDER_SHIPPED",
  MAIL = "MAIL",
  SURVEY = "SURVEY"
}

export enum NotificationStatus {
  NOTIFIED = "NOTIFIED",
  NOTIFICATION_READ = "NOTIFICATION_READ"
}

export enum SurveyStatus {
  DONE = "DONE",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}



type NotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResponseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveyUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Notification {
  readonly id: string;
  readonly title?: string;
  readonly userID?: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus;
  readonly type?: NotificationType | keyof typeof NotificationType;
  readonly description?: string;
  readonly Survey?: Survey;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notification, NotificationMetaData>);
  static copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}

export declare class Survey {
  readonly id: string;
  readonly title?: string;
  readonly surveyCreatedAt?: string;
  readonly status?: SurveyStatus | keyof typeof SurveyStatus;
  readonly surveyUrl?: string;
  readonly mediaUrl?: string;
  readonly Author?: Author;
  readonly Responses?: (Response | null)[];
  readonly SurveyUsers?: (SurveyUser | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Survey, SurveyMetaData>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey, SurveyMetaData>) => MutableModel<Survey, SurveyMetaData> | void): Survey;
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

export declare class Response {
  readonly id: string;
  readonly data?: string;
  readonly surveyID?: string;
  readonly User?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Response, ResponseMetaData>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response, ResponseMetaData>) => MutableModel<Response, ResponseMetaData> | void): Response;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly email?: string;
  readonly name?: string;
  readonly firstName?: string;
  readonly dateOfBirth?: string;
  readonly Notifications?: (Notification | null)[];
  readonly surveys?: (SurveyUser | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class SurveyUser {
  readonly id: string;
  readonly survey: Survey;
  readonly user: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SurveyUser, SurveyUserMetaData>);
  static copyOf(source: SurveyUser, mutator: (draft: MutableModel<SurveyUser, SurveyUserMetaData>) => MutableModel<SurveyUser, SurveyUserMetaData> | void): SurveyUser;
}