// actions/index.js
// Namespace actions
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';

export function increment(value){
    return{
        type: INCREMENT,
        value
    }
}

