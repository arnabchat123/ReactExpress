const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

// app.get('/auth/google',(req, res)=>{
//   res.send({hi: 'Arnab'});
// });



let PORT = process.env.PORT || 5000;
app.listen(PORT);