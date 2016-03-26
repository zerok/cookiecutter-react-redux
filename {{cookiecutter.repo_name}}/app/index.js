import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Router, Link, Route, Redirect, IndexRoute} from 'react-router';
import {reduxReactRouter, ReduxRouter, routerStateReducer} from 'redux-router';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';
// Change this if you want to have non-hash-URLs
import createHistory from 'history/lib/createHashHistory';

import {simpleReducer} from './reducers';
import Error404Page from './containers/error404';
import FrontPage from './containers/frontpage';


const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
        createHistory
    })
)(createStore)(combineReducers({
    'router': routerStateReducer,
    // Add your reducers here to be combined into the main store.
    'simple': simpleReducer
}));


// The App is the main entry point for the whole application.
var App = React.createClass({
    render() {
        return (
            <div id="page">
                <header></header>
                <div id="body">
                    {this.props.children}
                </div>
                <footer></footer>
            </div>
        );
    }
});

App = connect((state) => {
    return {};
})(App);


const routes = (
    <Provider store={store}>
        <ReduxRouter>
            <Route path="/" component={App}>
                <IndexRoute component={FrontPage} />
                // Add your sub-containers here
                <Route path="*" component={Error404Page} />
            </Route>
        </ReduxRouter>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));
