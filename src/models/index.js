// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SurveyStatus = {
  "DONE": "DONE",
  "COMPLETED": "COMPLETED",
  "IN_PROGRESS": "IN_PROGRESS"
};

const { Author, Survey, User } = initSchema(schema);

export {
  Author,
  Survey,
  User,
  SurveyStatus
};