import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderDetails from "../../src/components/OrderDetails.jsx";
import OrderSearch from "../../src/components/OrderSearch.jsx"
import OrderSearchResults from "../../src/components/OrderSearchResults.jsx"
import OrderItemsModal from "../../src/components/OrderItemsModal.jsx"

Enzyme.configure({ adapter: new Adapter() });

describe("Order Details component", () => {

    it("should load components", () => {
        const wrapper = shallow(<OrderDetails />);
        expect(wrapper.find(OrderSearch)).toHaveLength(1);
        expect(wrapper.find(OrderSearchResults)).toHaveLength(1);
        expect(wrapper.find(OrderItemsModal)).toHaveLength(1);
    });
});