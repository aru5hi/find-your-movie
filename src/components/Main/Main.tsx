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
                    <Route exact path="/" component={EmptyGridState} />
                    <Route exact path="/search/:text" component={MovieGrid} />
                    <Route exact path="/movie/:imdbId" component={MovieOverview} />
                    <Route exact path="/series/:imdbId" component={MovieOverview} />
                </div>
                <Footer/>
            </div>
        </Router>;
    }
}

export default MainComponent;