import React from 'react';
import './Footer.css';

export const Footer: React.FunctionComponent = () => {
    return <div className="footer-container">
        <div className="footer-text">
            Developed by <a className="link" rel="noreferrer" target="_blank" href="https://arushimishra.netlify.app">Arushi Mishra</a>, 
            using React JS, Redux and <a className="link" href="http://www.omdbapi.com/" target='_blank'>OMDB API</a>.
        </div>
    </div>
}