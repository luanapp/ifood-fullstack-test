import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default class OrderSearch extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search-fields">
                    <Paper>
                        <TextField id="startDate" type="date" margin="dense" label="Start Date" defaultValue="2018-01-01" />
                        <TextField id="startDate" type="date" margin="dense" label="End Date" defaultValue="2018-12-01" />
                        <TextField id="clientName" type="text" margin="dense" label="Client Name" />
                        <TextField id="clientName" type="text" margin="dense" label="Phone" />
                        <TextField id="clientName" type="text" margin="dense" label="E-mail" />
                    </Paper>
                </div>
                <div className="search-submit">
                    <Button variant="raised" color="primary">Search</Button>
                </div>
            </div>
        )
    }
}