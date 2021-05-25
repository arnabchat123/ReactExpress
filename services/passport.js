const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');


///////////////////GOOGLE////////////////////////
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
      console.log('Access Token : ',accessToken);
      console.log('Refresh Token : ',refreshToken);
      console.log('Profile : ',profile);
  })
);

//////////////////////GITHUB//////////////////////


passport.use(new GithubStrategy({
  clientID: keys.githubClientID,
  clientSecret: keys.githubClientSecret,
  callbackURL: '/auth/github/callback'
  }, (accessToken, refreshToken, profile, done) => {
      console.log('Access Token : ',accessToken);
      console.log('Refresh Token : ',refreshToken);
      console.log('Profile : ',profile);
  })
);

////////////////////FACEBOOK///////////////////////


passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: '/auth/facebook/callback'
  }, (accessToken, refreshToken, profile, cb) => {
      console.log('Access Token : ',accessToken);
      console.log('Refresh Token : ',refreshToken);
      console.log('Profile : ',profile);
  })
);