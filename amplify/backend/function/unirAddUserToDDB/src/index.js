/* eslint-disable prefer-template */
const aws = require('aws-sdk');

const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  const date = new Date();
  if (event.request.userAttributes.sub) {
    const params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'Users' },
        _lastChangedAt: { N: date.getTime() + '' },
        _version: { N: '1' },
        updatedAt: { S: date.toISOString() },
        createdAt: { S: date.toISOString() },
        username: { S: event.request.userAttributes.email },
        email: { S: event.request.userAttributes.email }
      },
      TableName: process.env.USERTABLE
    };

    try {
      console.log(params);
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
