import * as types from './actionTypes';

export function receiveOrderDetails(data) {
    return dispatch => {
        dispatch({
            type: types.RECEIVE_ORDER_DETAILS,
            orderDetails: data
        });
    };
}

export function fetchOrderDetails(searchParams) {
    return dispatch => {
        return fetch('', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            },
            body: searchParams,
        })
        .then(response => response.json())
        .then(json => dispatch(receiveStuff(json)))
        .catch(error => dispatch(errorOrderDetails(error)))
    }
}

export function errorOrderDetails(error) {
    return { type: types.FAIL_ORDER_DETAILS, error };
}