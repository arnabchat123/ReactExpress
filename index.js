const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const billingRoutes = require('./routes/billingRoutes');
//const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// app.get('/auth/google',(req, res)=>{
//   res.send({hi: 'Arnab'});
// });

let PORT = process.env.PORT || 5000;
app.listen(PORT);
