import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from "../actions/orderDetails";

export class OrderSearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentWillReceiveProps(nextProps) {
        const { orders } = nextProps;
        this.setState({
            orders
        });
    }

    openDetailsDialog(index) {
        const { fetchOrderItems, toggleItemsModal } = this.props;
        const { orders } = this.state;
        toggleItemsModal();
        fetchOrderItems(orders[index].items);
    }

    render() {
        const { orders } = this.state;
        return (
            <Table className="search-results" padding="dense">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Client Name</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row, index) => {
                        const total = row.items.reduce((acc, curr) => {
                            const qty = parseFloat(curr.quantity);
                            const price = parseFloat(curr.price);
                            acc = parseFloat(acc);
                            return acc + (qty * price);
                        }, 0.0);
                        return (
                            <TableRow className="row" key={index} onClick={() => this.openDetailsDialog(index)} >
                                <TableCell align="center" >{moment(row.createdAt).format('MM-DD-YYYY')}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="right">R$ {total.toFixed(2)}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orderDetails.orders
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleItemsModal: () => dispatch(actions.toggleItemsModal()),
        fetchOrderItems: (items) => dispatch(actions.fetchOrderItems(items))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSearchResults);