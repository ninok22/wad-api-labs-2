# Assignment 2 - Web API.

Name: Nino Kelehsashvili

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Popular Movies API Route and parameterised URL
 + Top Rated Movies API Route and parameterised URL
 + Integration with Assignment 1 MovieApp
 + Mongo Integration
 + React integration (Get, Post, Put)
 + Authentication and Protected Routes (Favorites and Must Watch)

## Installation Requirements

Download/clone my repo: 

```bat
https://github.com/ninok22/wad-api-labs-2
```
This is the repo for purely the API and not the integrated React App (That is covered later)

followed by installation of NPM in the 'movies-api' directory:

```bat
'npm install'
```

```bat
'npm start'
```

This installation of NPM is also done in the 'reactApp' directory to start the basic react app.

<br>

If you'd like to run the Assignment 1 App alongside the moviesAPI, first ensure the React App in wad-api-labs-2 isn't running by typing CTRL+c in the terminal in the reactApp directory. 

Then download the repo from:

```bat
https://github.com/ninok22/wad2-moviesApp
```

Then, in the moviesApp directory, run the same commands as with the reactApp:


```bat
'npm install'
```

```bat
'npm start'
```


## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.

Before running the API or React apps, a file must be created in the source directories of each app:

```bat
movies-api/.env
```

This will contain the following:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```

```bat
moviesApp/.env
```

This will contain:

```bat
REACT_APP_TMDB_KEY=YourTMDBSecretKey
FAST_REFRESH=false
```

If you're only using the basic reactApp found in wad-api-labs-2, only the .env file located in 'movies-api' is required.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB.



## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  | GET | POST | PUT | DELETE |
| -- | -- | -- | -- | -- |
| /api/genres | Get all genres | N/A | N/A | N/A |
| /api/movies | Get a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A |
| /api/popular | Get a list of the current popular movies from Seed Data | N/A | N/A | N/A |
| /api/topRated | Get a list of top rated movies from Seed Data | N/A | N/A | N/A |
| /api/upcoming | Get a list of upcoming movies from Seed Data | N/A | N/A | N/A |
| /api/users | Get all users | Register a new user | N/A | N/A |
| /api/users/{userid} | N/A | N/A | Update a user | N/A |

***Not Currently Working***

|  | GET | POST | PUT | DELETE |
| -- | -- | -- | -- | -- |
| /api/movieCredits/{movieid} | N/A | N/A | N/A | N/A |
| /api/{userid}/favorites/ | N/A | N/A | N/A | N/A |

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication

Implemented ability to login and authenticate user

Private Routes
+ /movies/mustWatchList
+ /movies/favorites

Public Routes
+ /login
+ /signup
+ /movies/:id/moviecredits
+ /movies/topRated
+ /movies/upcoming
+ /reviews/form
+ /reviews/:id
+ /movies/:id
+ / (Homepage)



## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
    return fetch(
      // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
      '/api/movies'
      ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
~~~

In the file 'package.json' located in the source directory of moviesApp, the following should be added to the bottom of the file, above the final bracket, but below the last bracket ending in a comma:


```bat
    },
  "proxy":"http://localhost:8080"
}
```


## Extra features

I had some trouble adding the TMDB path for the movie database website, so I added more instances of Seed Data to show the app working within it's own database

Seed Data added:
+ Upcoming
+ Top Rated
+ Popular
+ Movie Credits



## Independent learning

TMDB React Schemas and how to create Seed Data 
