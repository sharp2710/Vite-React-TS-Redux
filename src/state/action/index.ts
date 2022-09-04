import { ActionTypes } from '../action-types/index';

interface IncrementAction {
    type: ActionTypes.INCREMENT
    payload: number
}

interface DecrementAction {
    type: ActionTypes.DECREMENT
    payload: number
}

interface ResetAction {
    type: ActionTypes.RESET
}




export type Action = IncrementAction | DecrementAction | ResetAction;
