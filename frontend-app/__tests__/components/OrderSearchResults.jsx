import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { OrderSearchResults } from "../../src/components/OrderSearchResults.jsx";
import { orders } from "../../__mocks__/objectMocks";

Enzyme.configure({ adapter: new Adapter() });

describe("Order Search results component", () => {
    let wrapper;
    const newOrders = [orders[0], orders[0], orders[0]];
    const props = {
        toggleItemsModal: jest.fn(),
        fetchOrderItems: jest.fn(),
    };

    beforeEach(() => {
        for (var key in props) {
            if (typeof props[key] === "function") {
                spyOn(props, key).and.callThrough();
            }
        }
        wrapper = shallow(<OrderSearchResults {...props} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should set the component initial state", () => {
        expect(wrapper.state()).toEqual({
            orders: [],
        });
    });

    it("new props are saved to the state", () => {
        wrapper.setProps({
            orders
        });
        expect(wrapper.state()).toEqual({
            orders
        });
    });

    it("should render table with all orders", () => {
        wrapper.setProps({
            orders: newOrders
        });
        expect(wrapper.find(".row")).toHaveLength(newOrders.length);
    });

    it("should call to open items modal", () => {
        wrapper.setProps({
            orders: newOrders
        });
        wrapper.find(".row").at(1).simulate("click");
        expect(props.toggleItemsModal).toBeCalled();
        expect(props.fetchOrderItems).toBeCalledWith(newOrders[1].items);
    });
});