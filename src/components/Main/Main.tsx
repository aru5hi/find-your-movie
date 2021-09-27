import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { EmptyGridState } from '../MovieGrid/EmptyGridState';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieOverview from '../MovieOverview/MovieOverview';
import './Main.css';

class MainComponent extends React.Component<any> {
    render() {
        return <Router>
            <div>
                <Header/>
                <div className="body-container">
                    <Route exact path="/find-your-movie" component={EmptyGridState} />
                    <Route exact path="/find-your-movie/search/:text" component={MovieGrid} />
                    <Route exact path="/find-your-movie/movie/:imdbId" component={MovieOverview} />
                    <Route exact path="/find-your-movie/series/:imdbId" component={MovieOverview} />
                </div>
                <Footer/>
            </div>
        </Router>;
    }
}

export default MainComponent;