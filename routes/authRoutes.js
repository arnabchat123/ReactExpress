const passport = require('passport');

module.exports = app =>{

  //////////////GOOGLE///////////////////////////
  app.get('/auth/google',
  passport.authenticate('google',{ 
  scope: ['profile', 'email']})
  );

  app.get('/auth/google/callback',
  passport.authenticate('google'));

  //////////////GITHUB///////////////////////////
  app.get('/auth/github',
  passport.authenticate('github',{ 
  scope: ['profile', 'email']})
  );

  app.get('/auth/github/callback',
  passport.authenticate('github'));


  //////////////FACEBOOK///////////////////////////
  app.get('/auth/facebook',
  passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook'));
};