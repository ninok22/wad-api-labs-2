import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function CastCard({ cast, action }) {
  const classes = useStyles();


return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      title={
        <Typography variant="h5" component="p">
          {cast.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
            <Typography variant="h6" component="p">
              {"Character: "} {cast.character}
            </Typography>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
      </CardActions>
    </Card>
  );
}