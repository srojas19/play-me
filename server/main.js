import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": process.env.SPOTIFY_CLIENTID,
        "secret": process.env.SPOTIFY_SECRET
      }
    },
    { upsert: true }
  );
});