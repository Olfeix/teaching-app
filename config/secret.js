module.exports = {
  database:
    'mongodb+srv://olfeix:olfeix1234@cluster0.yu9cs.mongodb.net/testdb?retryWrites=true&w=majority',
  port: 8080,
  secretKey: 'olfeix1234',
  facebook: {
    clientID: '177611987541926',
    clientSecret: '0137cf59eda16b2fd1b1cadb37e9d1ed',
    profileFields: ['emails', 'displayName'],
    callbackURL:
      'https://obscure-headland-91052.herokuapp.com/auth/facebook/callback',
    passReqToCallback: true,
  },
};
