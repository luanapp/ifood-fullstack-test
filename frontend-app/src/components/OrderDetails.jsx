import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import OrderSearch from "./OrderSearch.jsx";
import OrderSearchResults from "./OrderSearchResults.jsx";
import OrderItemsModal from "./OrderItemsModal.jsx";
import './style/main.scss';

export class OrderDetails extends React.Component {
    render() {
        const { orders } = this.props;
        return (
            <div className="order-details">
                <Typography variant="h3" gutterBottom className="h2">Order Details</Typography>
                <OrderSearch />
                { orders && orders.length > 0 ? <OrderSearchResults /> : null }
                <OrderItemsModal />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { orders: state.orderDetails.orders };
};

export default connect(mapStateToProps)(OrderDetails);