import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../../src/actions/orderDetails";
import * as actionsTypes from "../../src/constants/actionTypes";
import * as urls from "../../src/constants/urls";
import { buildUrl } from "../../src/utils/urlUtils";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const searchParams = {
    startDate: (new Date()).toISOString(),
    endDate: (new Date()).toISOString(),
    name: "Name",
    phone: "Phone",
    email: "Email",
}
const order = { name: searchParams.name, phone: searchParams.phone, email: searchParams.email };

describe("Test Order Details actions", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    beforeEach(() => {
        store.clearActions();
    });

    it("should dispatch to ORDER_DETAILS_SUCCESS after fetch success", () => {
        const expectedActions = [
            { type: actionsTypes.ORDER_DETAILS_SUCCESS, orders: [order] }
        ];

        const url = buildUrl("/v1/orders/details", urls.API_GW_URL, searchParams);
        fetchMock.getOnce(url.toString(), [order]);

        store.dispatch(actions.fetchOrderDetails(searchParams)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch to ORDER_DETAILS_ERROR after fetch error", () => {
        const error = new Error("Error message");
        const expectedActions = [
            { type: actionsTypes.ORDER_DETAILS_ERROR, error }
        ];

        const url = buildUrl("/v1/orders/details", urls.API_GW_URL, searchParams);
        fetchMock.getOnce(url.toString(), () => {
            throw error;
        });

        store.dispatch(actions.fetchOrderDetails(searchParams)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


});
