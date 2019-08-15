import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Button from "@material-ui/core/Button";
import { OrderSearch } from "../../src/components/OrderSearch.jsx";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

describe("Order Search component", () => {
    let wrapper;
    const props = {
        fetchOrderDetails: jest.fn(),
    };

    beforeEach(() => {
        for (var key in props) {
            if (typeof props[key] === "function") {
                spyOn(props, key).and.callThrough();
            }
        }
        wrapper = shallow(<OrderSearch {...props} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should set the component initial state", () => {
        expect(wrapper.state()).toEqual({
            startDate: "",
            endDate: "",
            clientName: "",
            phone: "",
            email: "",
        });
    });

    it("should change state on field change", () => {
        const e = { target: { clientName: "clientName", value: "foo" } };
        wrapper.find("[name='clientName']").simulate("change", e);
        expect(wrapper.state()).toEqual({
            startDate: "",
            endDate: "",
            clientName: "foo",
            phone: "",
            email: "",
        });
    });

    it("should call fetchOrderDetails when clicking the search", () => {
        const searchParams = {
            startDate: "2018-11-01T00:00:00.000Z",
            endDate: "2019-01-01T00:00:00.000Z",
            clientName: "",
            phone: "",
            email: "",
        };
        wrapper.setState({
            startDate: "2018-11-01",
            endDate: "2019-01-01",
        });

        wrapper.find(Button).simulate("click");
        expect(props.fetchOrderDetails).toHaveBeenCalledWith(searchParams);
    });
});
