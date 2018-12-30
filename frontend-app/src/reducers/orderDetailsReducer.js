import initialState from './initialState';
import {
    FETCH_ORDER_DETAILS,
    RECEIVE_ORDER_DETAILS,
    FAIL_ORDER_DETAILS
} from '../actions/actionTypes';

export default (state = initialState.orderDetails, action) => {
    let newState = {};

    switch (action.type) {
        case FETCH_ORDER_DETAILS:
            newState.searchParams = action.searchParams;
            return Object.assign({}, state, newState);

        case RECEIVE_ORDER_DETAILS:
            newState.orderDetails = action.orderDetails;
            return Object.assign({}, state, newState);

        case FAIL_ORDER_DETAILS:
            newState.error = action.error;
            return Object.assign({}, state, newState);

        default:
            return state;
    }
}