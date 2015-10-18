import Immutable from 'immutable';
import ActionTypes from '../actionTypes';


export function simpleReducer(state = Immutable.Map({sampleProp: 0}), action) {
    console.log(action);
    switch(action.type) {
    case ActionTypes.SAMPLE_ACTION:
        return state.set('sampleProp', action.value);
    default:
        return state;
    }
}
