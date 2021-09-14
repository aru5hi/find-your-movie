import React from 'react';
import logo from '../../assets/play.png';
import { SearchBarRedux } from '../SearchBar/SearchBar';
import './Header.css';

export const Header: React.FunctionComponent = () => {
    return <div className="header-container">
        <div>
            <img src={logo} alt="Logo" className="logo"/>
        </div>
        <div className="app-name">
            Find Your Movie
        </div>
        <div className="search-bar">
            <SearchBarRedux/>
        </div>
    </div>
}