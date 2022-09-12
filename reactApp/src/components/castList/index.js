import React from "react";
import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";

const CastList = ( {moviecredits, action }) => {
  let castCards = moviecredits.map((c) => (
    <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={c.id} cast={c} action={action} />
    </Grid>
  ));
  return castCards;
};

export default CastList;