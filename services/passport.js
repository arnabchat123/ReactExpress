const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

///////////////////GOOGLE////////////////////////
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ uId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ uId: profile.id }).save();
      done(null, user);

      console.log('Profile : ', profile);
    }
  )
);

//////////////////////GITHUB//////////////////////

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ uId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //The user is already existing. No need to create one.
          done(null, existingUser);
        } else {
          //The User is not there. So need to create the user.
          new User({ uId: profile.id }).save().then((user) => done(null, user));
        }
      });
      console.log('Profile : ', profile);
    }
  )
);

////////////////////FACEBOOK///////////////////////

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ uId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //The user is already existing. No need to create one.
          done(null, existingUser);
        } else {
          //The User is not there. So need to create the user.
          new User({ uId: profile.id }).save().then((user) => done(null, user));
        }
      });
      console.log('Profile : ', profile);
    }
  )
);
