import React from 'react';
import {connect} from 'react-redux';

import performSampleAction from '../actions/sample';


const FrontPage = React.createClass({
    propTypes: {
        sampleProp: React.PropTypes.number
    },
    render() {
        return <div>
            <p>You are on the frontpage.</p>
            <p>State of key: {this.props.sampleProp}</p>
            <a href="" onClick={this._doAction}>Execute action</a>
        </div>;
    },

    _doAction(evt) {
        evt.preventDefault();
        this.props.performSampleAction(123);
    }
});

export default connect((state) => {
    return {
        'sampleProp': state.simple.get('sampleProp')
    };
}, {
    performSampleAction
})(FrontPage);
