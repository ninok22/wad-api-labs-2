import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';

// import the movieModel and movies array exported from movies.js.
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';

// import genreModel and genre array from genres.js
import genreModel from '../api/genres/genreModel';
import genres from './genres.js';

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


if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
}

