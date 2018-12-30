import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rows = [
    {
        createdDate: '',
        clientName: '',
        phone: '',
        email: '',
        total: 0.0,
    }
]

export default class OrderSearchResults extends React.Component {
    render() {
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
                        {rows.map(row => {
                            return (
                                <TableRow>
                                    <TableCell align="center">{row.createdDate}</TableCell>
                                    <TableCell align="center">{row.clientName}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="right">{row.total}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}