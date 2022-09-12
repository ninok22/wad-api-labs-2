import React from 'react';
import { useContext } from 'react';
import { MoviesContext } from './moviesContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }

export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
            <h2>Movies Data</h2>
            <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

export const UpcomingMovies = () => {
    const context = useContext(MoviesContext);
    return <>
            <h2>Upcoming Movies Data</h2>
            <div>
            {context.upcoming.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

export const TopRatedMovies = () => {
    const context = useContext(MoviesContext);
    return <>
            <h2>Top Rated Movies Data</h2>
            <div>
            {context.topRated.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

export const PopularMovies = () => {
    const context = useContext(MoviesContext);
    return <>
            <h2>Popular Movies Data</h2>
            <div>
            {context.popular.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}

// export const MovieCredits = () => {
//     const context = useContext(MoviesContext);
//     return <>
//             <h2>Movies Credits Data</h2>
//             <div>
//             {context.movieCredits.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
//         </div>
//     </>
// }
 