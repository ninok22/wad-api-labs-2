import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
  return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
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

export const getMovies = () => {
  return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
      .then(res => res.json())
      .then(json => json.results);
};


export const getTopRatedMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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

  export const getMovieCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
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

  export const getPopularMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
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