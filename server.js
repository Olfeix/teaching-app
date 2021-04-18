var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ejs = require('ejs');
var engine = require('ejs-mate');
var passport = require('passport');
var secret = require('./config/secret');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo');
var flash = require('express-flash');
const process = require('process');
const port = process.env.PORT || 8080;
const uri = secret.database;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established');
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: secret.secretKey,
    store: MongoStore.create({
      mongoUrl: secret.database,
    }),
  }),
);
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(flash());
require('./routes/main')(app);
require('./routes/user')(app);
require('./routes/teacher')(app);
require('./routes/payment')(app);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port ' + secret.port);
  }
});
