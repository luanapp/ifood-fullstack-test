import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { OrderDetails } from "../../src/components/OrderDetails.jsx";
import OrderSearch from "../../src/components/OrderSearch.jsx"
import OrderSearchResults from "../../src/components/OrderSearchResults.jsx"
import OrderItemsModal from "../../src/components/OrderItemsModal.jsx"

Enzyme.configure({ adapter: new Adapter() });

describe("Order Details component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<OrderDetails />);
        wrapper.setProps({
            orders: [{}]
        });
    });

    it("should load components", () => {
        expect(wrapper.find(OrderSearch)).toHaveLength(1);
        expect(wrapper.find(OrderSearchResults)).toHaveLength(1);
        expect(wrapper.find(OrderItemsModal)).toHaveLength(1);
    });

    it("should NOT load OrderSearchResults if there are no orders", () => {
        wrapper.setProps({
            orders: []
        });
        expect(wrapper.find(OrderSearch)).toHaveLength(1);
        expect(wrapper.find(OrderSearchResults)).toHaveLength(0);
        expect(wrapper.find(OrderItemsModal)).toHaveLength(1);
    });
});