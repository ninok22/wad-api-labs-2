import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage, UpcomingMovies, TopRatedMovies, PopularMovies } from "./pages";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import SignUpPage from "./signUpPage";
import MovieProvider from "./moviesContext";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Movies</Link>
          </li>
          <li>
            <Link to="/topRated">Top Rated Movies</Link>
          </li>
        </ul>
        <MovieProvider>
        <Switch>
          <Route path="/popular" component={PopularMovies} />
          <Route path="/topRated" component={TopRatedMovies} />
          <Route path="/upcoming" component={UpcomingMovies} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/public" component={PublicPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/movies" component={Movies} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



