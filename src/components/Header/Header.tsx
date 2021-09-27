import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/play.png';
import { SearchBarRedux } from '../SearchBar/SearchBar';
import './Header.css';

export const Header: React.FunctionComponent = () => {
    return <div className="header-container">
        <div>
            <Link to="/">
                <img src={logo} alt="Logo" className="logo"/>
            </Link>
        </div>
        <div className="app-name">
        <Link to="/">
            Find Your Movie
            </Link> 
        </div>
        <div className="search-bar">
            <SearchBarRedux/>
        </div>
    </div>
}