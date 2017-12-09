import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": "llenar con variable entorno",
        "secret": "llenar con variable entorno"
      }
    },
    { upsert: true }
  );
});
