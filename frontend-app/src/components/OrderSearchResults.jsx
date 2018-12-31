import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as moment from "moment";

class OrderSearchResults extends React.Component {

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

    render() {
        const { orders } = this.state;
        return (
            <Paper className="search-results">
                <Table padding="dense">
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
                                <TableRow key={index}>
                                    <TableCell align="center">{moment(row.createdAt).format('MM-DD-YYYY')}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="right">R$ {total.toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orderDetails.orders
    };
};

export default connect(mapStateToProps)(OrderSearchResults);