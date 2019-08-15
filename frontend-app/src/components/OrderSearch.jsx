import * as actions from "../actions/orderDetails";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

export class OrderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            clientName: "",
            phone: "",
            email: "",
        };
    }

    search() {
        const { fetchOrderDetails } = this.props;
        const { startDate, endDate, clientName, phone, email } = this.state;
        const searchParams = {
            startDate: startDate ? (new Date(startDate)).toISOString() : '',
            endDate: endDate ? (new Date(endDate)).toISOString() : '',
            clientName,
            phone,
            email,
        };

        fetchOrderDetails(searchParams);
    }

    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { startDate, endDate, clientName, phone, email } = this.state;
        return (
            <div className="order-search">
                <div className="search-fields">
                    <Paper className="page">
                        <TextField className="field" name="startDate" type="date" margin="dense" label="Start Date" value={startDate} onChange={this.onFieldChange.bind(this)} InputLabelProps={{shrink: true,}} />
                        <TextField className="field" name="endDate" type="date" margin="dense" label="End Date" value={endDate} onChange={this.onFieldChange.bind(this)} InputLabelProps={{shrink: true,}} />
                        <TextField className="field" name="clientName" type="text" margin="dense" label="Client name" value={clientName} onChange={this.onFieldChange.bind(this)} />
                        <TextField className="field" name="phone" type="text" margin="dense" label="Phone" value={phone} onChange={this.onFieldChange.bind(this)} />
                        <TextField className="field" name="email" type="text" margin="dense" label="E-mail" value={email} onChange={this.onFieldChange.bind(this)} />
                    </Paper>
                </div>
                <div className="search-submit">
                    <Button variant="contained" color="primary" onClick={this.search.bind(this)}>Search</Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrderDetails: (searchParams) => dispatch(actions.fetchOrderDetails(searchParams))
    };
};

const connector = connect(
    undefined,
    mapDispatchToProps
);
export default connector(OrderSearch);
