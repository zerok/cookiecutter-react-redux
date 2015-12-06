import {SAMPLE_ACTION} from '../actiontypes';

export default function performSampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        value: value
    };
}
