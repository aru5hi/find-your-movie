import React from 'react';
import './Footer.css';

export const Footer: React.FunctionComponent = () => {
    return <div className="footer-container">
        <div className="app-name">
            Developed by <a className="link" rel="noreferrer" target="_blank" href="https://arushimishra.netlify.app">Arushi Mishra</a>, using React JS and Redux.
        </div>
    </div>
}