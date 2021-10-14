// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SurveyStatus = {
  "DONE": "DONE",
  "COMPLETED": "COMPLETED",
  "IN_PROGRESS": "IN_PROGRESS"
};

const { Surveys, Authors, SurveysUsers, Users } = initSchema(schema);

export {
  Surveys,
  Authors,
  SurveysUsers,
  Users,
  SurveyStatus
};