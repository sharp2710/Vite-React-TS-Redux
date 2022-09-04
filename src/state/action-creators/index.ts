import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../action/index";


export const _increment = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.INCREMENT,
            payload: amount
        });
    }
}


export const _decrement = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DECREMENT,
            payload: amount
        });
    }
}

export const _reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.RESET,
        });
    }
}