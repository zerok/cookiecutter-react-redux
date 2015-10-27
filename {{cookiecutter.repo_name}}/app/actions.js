export const SAMPLE_ACTION = 'SAMPLE_ACTION';

export function performSampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        value: value
    };
}

// For asynchronous actions take a look at the thunk middleware as described on
// http://rackt.org/redux/docs/advanced/AsyncActions.html .
