import React from 'react';
import './SearchBar.css';
import searchIcon from '../../assets/search-icon.png';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';


const SearchBar: React.FunctionComponent<any> = (props) => {
    const [searchString, setSearchString] = React.useState('');
    
    const handleSearchBarChange = (event: React.ChangeEvent<{value: unknown}>) => {
        const value = event.target.value as string;
        setSearchString(value);
        props.searchMovie(value);
    }

    const onSubmitSearch = (event: any) => {
        event.preventDefault();
        props.fetchMovies(props.text);
    }

    return <form onSubmit={onSubmitSearch} className="search-bar-container">
        <input type="text" className="search-input" placeholder="Search" value={searchString} onChange={handleSearchBarChange}/>
        <button className="search-button" onClick={onSubmitSearch} type="submit">
            <img src={searchIcon} alt="search" className="search-icon"/>
        </button>
    </form>
}

const mapStateToProps = (state: any) => ({
    text: state.movieList.text
})

export const SearchBarRedux =  connect(mapStateToProps, {searchMovie, fetchMovies})(SearchBar);