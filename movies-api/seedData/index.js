import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';

// import the movieModel and movies array exported from movies.js.
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
// import genreModel and genre array from genres.js
import genreModel from '../api/genres/genreModel';
import genres from './genres.js';

import upcomingModel from '../api/upcoming/upcomingModel';
import upcoming from './upcoming.js';

import topRatedModel from '../api/topRated/topRatedModel';
import topRated from './topRated.js';

import movieCreditsModel from '../api/movieCredits/movieCreditsModel';
import movieCredits from './movieCredits.js';
import { getMovieCredits } from '../api/tmdb-api';

import popularModel from '../api/popular/popularModel';
import popular from './popular';


dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user-seed data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all genre documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre-seed data');
  // console.log(genres.length);
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} Genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load movie-seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load upcoming data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Upcoming movie Data: ${err}`);
  }
}


export async function loadTopRated() {
  console.log('load top rated data');
  console.log(topRated.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRated);
    console.info(`${topRated.length} Top Rated movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Top Rated movie Data: ${err}`);
  }
}

export async function loadMovieCredits() {
  console.log('load movie credits data');
  // console.log(movieCredits.length);
  try {
    const movieCredits = await getMovieCredits();
    await movieCreditsModel.deleteMany();
    await movieCreditsModel.collection.insertMany(movieCredits);
    console.info(`${movieCredits.length} Movie credits were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Movie Credits Data: ${err}`);
  }
}

export async function loadPopular() {
  console.log('load popular data');
  console.log(popular.length);
  try {
    await popularModel.deleteMany();
    await popularModel.collection.insertMany(popular);
    console.info(`${popular.length} Popular movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Popular movie Data: ${err}`);
  }
}


if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadUpcoming();
  loadTopRated();
  loadMovieCredits();
  loadPopular();
}

