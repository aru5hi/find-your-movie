import React from 'react';
import nullStateImage from '../../assets/landing-null-state.gif';

interface EmptyStateProps {
    isNoResultState?: boolean;
}

export const EmptyGridState: React.FunctionComponent<EmptyStateProps> = (props) => {
    return <> 
    <div className="null-container">
        <img src={nullStateImage} alt="Search for your movies" className="null-state-image"/>
        <div className="null-title">
            Nothing to show. Try searching for {props.isNoResultState ? 'for something else' : 'your favourite movie'}.
        </div>
    </div>
    <style dangerouslySetInnerHTML={{__html: `
        .null-container {
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 3rem;
        }
        .null-state-image {
            width: 100%;
            margin: 0.5rem;
            border-radius: 50%;
        }
        .null-title {
            color: #ffffff;
            font-weight: bold;
            text-align: center;
        }
        @media only screen and (min-width: 768px) {
            .null-state-image {
                width: 40rem;
            }
        }
    `}}/>
    </>;
};
