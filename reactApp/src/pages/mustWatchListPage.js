import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api"; 
import Spinner from '../components/spinner';
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";


const MustWatchListPage = () => {
  const {mustWatchList: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

 // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = mustWatchQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;

return (
    <PageTemplate
      title="Must Watch"
      movies={movies}
      action={(movie) => { //the render prop function
        return (
          <>
          <RemoveFromMustWatch movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchListPage;