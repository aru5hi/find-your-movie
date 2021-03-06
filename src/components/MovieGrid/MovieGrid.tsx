import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { fetchMovies } from '../../actions/searchActions';
import { MovieDetails } from '../../reducers/searchReducer';
import { Loader } from '../ComponentLibrary';
import { MovieCard } from '../MovieCard';
import { EmptyGridState } from './EmptyGridState';
import './MovieGrid.css';

interface MovieGridProps {
    movieList: MovieDetails[];
    isLoading: boolean;
    text: string;
    fetchMovies: any;
}

export const MovieGrid: React.FunctionComponent<MovieGridProps & RouteComponentProps<{text: string}>> = (props) => {
    const { fetchMovies } = props;
    useEffect(() => {
        fetchMovies(props.match.params.text);
    }, [fetchMovies, props.match.params.text]);

    const renderMovieGrid = () => {
        return props.movieList.map( (movie, index) => <MovieCard key={index} {...movie}/>)
    }

    return <>
        {props.isLoading ?
            <div className="loader-container">
                <Loader/>
                Finding the matches...
            </div> :
            props.movieList && props.movieList.length ? 
            <div className="movie-grid-container">{renderMovieGrid()}</div> :
            <EmptyGridState isNoResultState/>
        }
    </>;
}

const mapStateToProps = (state: any) => ({
    movieList: state.appState.movieList,
    isLoading: state.appState.isLoading,
    text: state.appState.text
});

export default withRouter(connect(mapStateToProps, {fetchMovies})(MovieGrid));
