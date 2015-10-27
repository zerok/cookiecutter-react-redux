import Immutable from 'immutable';
import {SAMPLE_ACTION} from '../actions';


export function simpleReducer(state = Immutable.Map({sampleProp: 0}), action) {
    console.log(action);
    switch(action.type) {
    case SAMPLE_ACTION:
        return state.set('sampleProp', action.value);
    default:
        return state;
    }
}
