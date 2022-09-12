import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateCastListPage";
import { getMovieCredits } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const MovieCreditsPage = (props) => {
  const { id } = props.match.params;
  const {  data, error, isLoading, isError }  = useQuery(["moviecredits",{ id: id}] , getMovieCredits)

  if (isLoading) {
    return <Spinner />
  }

  ;if (isError) {
    return <h1>{error.message}</h1>
  }  
  const moviecredit = data.cast;

return (
  <PageTemplate
    title="Cast List"
    moviecredits={moviecredit}
    // action={(movie) => {                    
    //   return <AddToFavoritesIcon movie={movie} />
    // }}
  />
);
};

export default withRouter(MovieCreditsPage);

