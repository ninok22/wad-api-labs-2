import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

//The icon/Link routes the app to the URL '/reviews/form' 
//and passes the movie's Id as a prop.
const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movieId: movie.id,
        },
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;