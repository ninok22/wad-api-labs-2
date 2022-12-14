import dotenv from 'dotenv'; //+
import express from 'express'; //+
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';
import upcomingRouter from './api/upcoming';
import topRatedRouter from './api/topRated';
import movieCreditsRouter from './api/movieCredits';
import popularRouter from './api/popular';
import './db';
import './seedData';
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

app.use(passport.initialize());

app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/topRated', topRatedRouter);
app.use('/api/movieCredits', movieCreditsRouter);
app.use('/api/popular', popularRouter);

// app.listen(port, () => { //+
//   console.info(`Server running at ${port}`);
// });

let server = app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
module.exports = server