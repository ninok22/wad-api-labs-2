import dotenv from 'dotenv'; //+
import express from 'express'; //+
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import './db';
import './seedData';
import usersRouter from './api/users';
// import session from 'express-session';
// import authenticate from './authenticate';

// replace existing import with passport strategy​
import passport from './authenticate';

dotenv.config(); //+

const app = express(); //+

const port = process.env.PORT; //+

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

// //session middleware
// app.use(session({
//   secret: 'ilikecake',
//   resave: true,
//   saveUninitialized: true
// }));

// replace app.use(session([... with the following:
app.use(passport.initialize());

app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);
//update /api/Movie route
// app.use('/api/movies', authenticate, moviesRouter);

// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);


app.listen(port, () => { //+
  console.info(`Server running at ${port}`);
});

