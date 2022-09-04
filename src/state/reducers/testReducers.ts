import { ActionTypes } from '../action-types';
import { Action } from '../action/index';

const initialState = 0;

const testReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload;
        case ActionTypes.DECREMENT:
            return state > 0 ? state - action.payload : state;
        case ActionTypes.RESET:
            return 0;

        default:
            return state;
    }
}


export default testReducer;