import {combineReducers} from 'redux';
import orderDetails from './orderDetailsReducer';

const reducers = combineReducers({
    orderDetails
});

export default reducers;