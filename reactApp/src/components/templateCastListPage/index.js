import React from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});


function CastListPageTemplate({ moviecredits, title }) {
  const classes = useStyles();

    let displayedCast = moviecredits

  
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <CastList moviecredits={displayedCast}></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;