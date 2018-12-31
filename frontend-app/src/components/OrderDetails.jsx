import React from "react";
import Typography from "@material-ui/core/Typography";
import OrderSearch from "./OrderSearch.jsx";
import OrderSearchResults from "./OrderSearchResults.jsx";
import OrderItemsModal from "./OrderItemsModal.jsx";

export default class OrderDetails extends React.Component {
    render() {
        return (
            <div className="order-details">
                <Typography variant="h3" gutterBottom className="h2">Order Details</Typography>
                <OrderSearch/>
                <OrderSearchResults/>
                <OrderItemsModal/>
            </div>
        )
    }
}