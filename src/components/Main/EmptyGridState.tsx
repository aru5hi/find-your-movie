import React from 'react';
import nullStateImage from '../../assets/landing-null-state.gif';

export const EmptyGridState: React.FunctionComponent = () => {
    return <> 
    <div className="null-container">
        <img src={nullStateImage} alt="Search for your movies" className="null-state-image"/>
        <div className="null-title">
            Nothing to show. Try searching for your favourite movie.
        </div>
    </div>
    <style dangerouslySetInnerHTML={{__html: `
        .null-container {
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .null-state-image {
            width: 40rem;
            margin: 0.5rem;
            border-radius: 50%;
        }
        .null-title {
            color: #ffffff;
            font-weight: bold;
        }
    `}}/>
    </>;
};
