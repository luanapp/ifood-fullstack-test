import * as types from "./actionTypes";

const buildUrl = (urlStr, params) => {
    let url = new URL(urlStr);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url;
}

export const receiveOrderDetails = (data) => {
    return dispatch => {
        dispatch({
            type: types.RECEIVE_ORDER_DETAILS,
            orders: data
        });
    };
};

export const fetchOrderDetails = (searchParams) => {
    return dispatch => {
        const url = buildUrl("http://localhost:8082/v1/orders/details", searchParams);
        return fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Origin": "*"
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveOrderDetails(json)))
            .catch(error => dispatch(errorOrderDetails(error)))
    };
};

export const errorOrderDetails = (error) => {
    return dispatch => {
        dispatch({
            type: types.FAIL_ORDER_DETAILS,
            error
        });
    };
};

export const toggleItemsModal = (open) => {
    return dispatch => {
        dispatch({
            type: types.TOGGLE_ORDER_ITEMS
        });
    };
};

export const fetchOrderItems = (items) => {
    return dispatch => {
        dispatch({
            type: types.FETCH_ORDER_ITEMS,
            items
        });
    };
};