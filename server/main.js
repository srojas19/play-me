import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": process.env.CLIENT_ID,
        "secret": process.env.SECRET
      }
    },
    { upsert: true }
  );
});
