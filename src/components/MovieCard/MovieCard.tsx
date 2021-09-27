import React from 'react';
import { MovieDetails } from '../../reducers/searchReducer';
import { Ribbon } from '../ComponentLibrary/Ribbon/Ribbon';
import './MovieCard.css';
import { Button } from '../ComponentLibrary';

export const MovieCard: React.FunctionComponent<MovieDetails> = (props) => {

    const handleDetailsButtonClick = (_event: any) => {
        window.location.href = `/${props.Type}/${props.imdbID}`;
    }

    return <div className="movie-card-container" title={props.Title}>
        <img src={props.Poster} alt={props.Title} className="movie-image"/>
        <div className="type-ribbon">
            <Ribbon>{props.Type[0].toUpperCase() + props.Type.slice(1)}</Ribbon>
        </div>
        <div className="movie-details">
            <div className="movie-title">
                <div className="title-text">{props.Title}</div>
            </div>
            <div className="year">{props.Year}</div>
            <Button onClick={handleDetailsButtonClick}>View More</Button>
        </div>
    </div>;
};
