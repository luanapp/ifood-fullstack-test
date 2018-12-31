import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rows = [
    {
        description: "",
        quantity: 0,
        price: 0.0,
        total: 0.0,
    }
]

export default class OrderItemsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            fullWidth: true,
            maxWidth: "sm",
        };
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        return (
            <Dialog className="items-dialog" maxWidth="md" open={this.state.open} onClose={this.handleClose}>
                <DialogTitle id="dialog-title">Order Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Paper className="items-table">
                            <Table padding="dense">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Description</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align="center">{row.description}</TableCell>
                                                <TableCell align="center">{row.quantity}</TableCell>
                                                <TableCell align="center">{row.price}</TableCell>
                                                <TableCell align="right">{row.total}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }
}