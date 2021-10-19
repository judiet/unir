// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationType = {
  "CHAT_MESSAGE": "CHAT_MESSAGE",
  "ORDER_PLACED": "ORDER_PLACED",
  "ORDER_SHIPPED": "ORDER_SHIPPED",
  "MAIL": "MAIL",
  "SURVEY": "SURVEY"
};

const NotificationStatus = {
  "NOTIFIED": "NOTIFIED",
  "NOTIFICATION_READ": "NOTIFICATION_READ"
};

const SurveyStatus = {
  "DONE": "DONE",
  "COMPLETED": "COMPLETED",
  "IN_PROGRESS": "IN_PROGRESS"
};

const { Notification, Survey, Author, Response, User, SurveyUser } = initSchema(schema);

export {
  Notification,
  Survey,
  Author,
  Response,
  User,
  SurveyUser,
  NotificationType,
  NotificationStatus,
  SurveyStatus
};