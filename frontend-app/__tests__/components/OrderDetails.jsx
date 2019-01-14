import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderDetails from "../../src/components/OrderDetails.jsx"

Enzyme.configure({ adapter: new Adapter() });

describe("Order Details component", () => {

    it("should load components", () => {
        const wrapper = shallow(<OrderDetails />);
        expect(wrapper.find("Typography")).not.toBeNull();
        expect(wrapper.find("OrderSearch")).not.toBeNull();
        expect(wrapper.find("OrderSearchResults")).not.toBeNull();
        expect(wrapper.find("OrderItemsModal")).not.toBeNull();
    });
});