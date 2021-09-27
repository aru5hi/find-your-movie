import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './MovieOverview.css';
import imdbIcon from '../../assets/imdb-icon.png';
import rottenTomato from '../../assets/rotten-tomato.png';
import criticLogo from '../../assets/popcorn.png';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../actions/searchActions';
import { Loader } from '../ComponentLibrary';
import { MovieOverviewData } from './MovieOverviewType';

interface MovieOverviewProps {
    movieDetails: MovieOverviewData;
    isLoading: boolean;
    fetchMovieDetails: any;
}

const MovieOverview: React.FunctionComponent<MovieOverviewProps & RouteComponentProps<{imdbId: string}>> = (props) => {
    const { fetchMovieDetails } = props;
    useEffect(() => {
        fetchMovieDetails(props.match.params.imdbId);
    }, [props.match.params.imdbId, fetchMovieDetails]);


    const renderMovieRating = () => {
        return props.movieDetails.Ratings.map((rating) => {
            switch(rating.Source) {
                case 'Internet Movie Database':
                    return <div className="rating" title="IMDB rating">
                        <img alt="IMDB rating" className="icon-image" src={imdbIcon}/>{rating.Value}
                    </div>
                case 'Rotten Tomatoes':
                    return <div className="rating" title="Rotten Tomatoes rating">
                        <img alt="Rotten Tomatoes" className="icon-image" src={rottenTomato}/>{rating.Value}
                    </div>
                case 'Metacritic':
                    return <div className="rating" title="Meta Critic rating">
                        <img alt="Critic rating" className="icon-image" src={criticLogo}/>{rating.Value}
                    </div>
                default:
                    return <></>
            }
        });
    }

    return <>
        {props.isLoading && 
            <div className="loader-container">
                <Loader/>
                Please wait while we get the data
            </div>
        }   
        {props.movieDetails && 
            <div className="overview-container">
                <div className="movie-poster">
                    <img alt={props.movieDetails.Title} src={props.movieDetails.Poster}/>
                </div>
                <div className="movie-data">
                    <div className="title">
                        {props.movieDetails.Title}
                    </div>
                    <div className="inline-container">
                        {renderMovieRating()}
                    </div>
                    <div className="inline-container">
                        <div className="type">
                            {props.movieDetails.Type[0].toUpperCase() + props.movieDetails.Type.slice(1)}
                        </div>
                        <div className="genre">
                            {props.movieDetails.Genre}
                        </div>
                    </div>
                    <div className="inline-container">
                        <div className="year-title">
                            {props.movieDetails.Year}
                        </div>
                        <div className="runtime">{props.movieDetails.Runtime}</div>
                    </div>
                    <div className="plot">
                        {props.movieDetails.Plot}
                    </div>
                </div>
            </div>
        }
    </>
};

const  mapStateToProps = (state: any) => {
    return {
        isLoading: state.appState.isLoading,
        movieDetails: state.appState.movieDetails
    }
}

const MovieOverviewWithRedux = connect(mapStateToProps, { fetchMovieDetails })(MovieOverview);
export default withRouter(MovieOverviewWithRedux);
