import React from 'react';
import { MovieDetails } from '../../reducers/searchReducer';
import { MovieCard } from '../MovieCard';
import './MovieGrid.css';

interface MovieGridProps {
    movieList: MovieDetails[];
}

export const MovieGrid: React.FunctionComponent<MovieGridProps> = (props) => {
    const renderMovieGrid = () => {
        return props.movieList.map( (movie, index) => <MovieCard key={index} {...movie}/>)
    }

    return <div className="movie-grid-container">
        {renderMovieGrid()}
    </div>;
}

