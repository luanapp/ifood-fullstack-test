import {
    FETCH_ORDER_DETAILS,
    RECEIVE_ORDER_DETAILS,
    FAIL_ORDER_DETAILS,
    TOGGLE_ORDER_ITEMS,
    FETCH_ORDER_ITEMS
} from "../actions/actionTypes";

const initialState = {
    orders: [],
    open: false
};

export default (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case FETCH_ORDER_DETAILS:
            newState.searchParams = action.searchParams;
            return Object.assign({}, state, newState);

        case RECEIVE_ORDER_DETAILS:
            newState.orders = action.orders;
            return Object.assign({}, state, newState);

        case FAIL_ORDER_DETAILS:
            newState.error = action.error;
            return Object.assign({}, state, newState);

        case TOGGLE_ORDER_ITEMS:
            newState.open = !state.open;
            return Object.assign({}, state, newState);

        case FETCH_ORDER_ITEMS:
            newState.items = action.items;
            return Object.assign({}, state, newState);

        default:
            return state;
    }
}