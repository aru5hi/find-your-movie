import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import './Main.css';
import { connect } from 'react-redux'
import { EmptyGridState } from './EmptyGridState';
import { Loader } from '../ComponentLibrary/Loader/Loader';

class MainComponent extends React.Component<any> {
    render() {
        return <div>
            <Header/>
            { this.props.isLoading ?
            <div className="loader-container">
                <Loader/>
                Finding the matches...
            </div> :
            this.props.movieList && this.props.movieList.length ? 
            <MovieGrid movieList={this.props.movieList}/> :
            <EmptyGridState/>
            }
            <Footer/>
        </div>;
    }
}

const mapStateToProps = (state: any) => ({
    movieList: state.movieList.movieList,
    isLoading: state.movieList.isLoading
});

export default connect(mapStateToProps)(MainComponent);