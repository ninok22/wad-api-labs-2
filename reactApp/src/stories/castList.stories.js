import React from "react";
import CastList from "../components/castList";
import SampleCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Home Page/CastList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const moviecredits = [
    { ...SampleCast, id: 1 },
    { ...SampleCast, id: 2 },
    { ...SampleCast, id: 3 },
    { ...SampleCast, id: 4 },
    { ...SampleCast, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <CastList
      moviecredits={moviecredits}
      />
    </Grid>
  );
};
Basic.storyName = "Default";