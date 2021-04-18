module.exports = {
  database:
    'mongodb+srv://<username>:<password>@cluster0.yu9cs.mongodb.net/<password>?retryWrites=true&w=majority',
  port: 8080,
  secretKey: 'key',
  facebook: {
    clientID: '*********',
    clientSecret: '******',
    profileFields: ['emails', 'displayName'],
    callbackURL:
      'https://obscure-headland-91052.herokuapp.com/auth/facebook/callback',
    passReqToCallback: true,
  },
};
