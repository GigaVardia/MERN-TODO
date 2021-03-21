import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Style
import './scss/App.scss';
import MainPage from "./Components/MainPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;