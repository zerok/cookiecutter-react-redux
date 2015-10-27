import React from 'react/addons';
import {Router, Link, Route, Redirect} from 'react-router';
import {reduxReactRouter, ReduxRouter, routerStateReducer} from 'redux-router';
import {compose, combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';
// Change this if you want to have non-hash-URLs
import createHistory from 'history/lib/createHashHistory';

import {simpleReducer} from './reducers';
import {performSampleAction} from './actions';
import Error404Page from './containers/error404';


const store = compose(
    reduxReactRouter({
        createHistory
    })
)(createStore)(combineReducers({
    'router': routerStateReducer,
    // Add your reducers here to be combined into the main store.
    'simple': simpleReducer
}));


// The App is the main entry point for the whole application. It also acts
// as the handler for frontpage renderings. Simply check if there are any
// children-properties attached to distinguish frontpage- from subpage-
// requests.
var App = React.createClass({
    render() {
        return (
            <div id="page">
                <header></header>
                <div id="body">
                    {this._renderBody()}
                </div>
                <footer></footer>
            </div>
        );
    },

    _renderBody() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return <div>
                <p>You are on the frontpage.</p>
                <p>State of key: {this.props.sampleProp}</p>
                <a href="" onClick={this._doAction}>Execute action</a>
            </div>;
        }
    },

    _doAction(evt) {
        evt.preventDefault();
        this.props.dispatch(performSampleAction(123));
    }
})


App.propTypes = {
    sampleProp: React.PropTypes.number
};


// The app should receive the sampleProp property whenever the state.simple.key
// changes.
App = connect((state) => {
    return {
        'sampleProp': state.simple.get('sampleProp')
    };
})(App);


const routes = (
    <Provider store={store}>{() => (
        <ReduxRouter>
            <Route path="/" component={App}>
                // Add your sub-containers here
                <Route path="*" component={Error404Page} />
            </Route>
        </ReduxRouter>
    )}</Provider>
);

React.render(routes, document.body);
