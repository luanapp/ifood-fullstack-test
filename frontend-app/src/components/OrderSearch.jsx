import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as actions from "../actions/orderDetails";

class OrderSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: "2018-01-01",
            endDate: "2018-02-01",
            name: "",
            phone: "",
            email: "",
        }
    }

    transformOrderParams() {
        let data = this.state;
        data.startDate = (new Date(data.startDate)).toISOString();
        data.endDate = (new Date(data.endDate)).toISOString();
        return data;
    }

    search() {
        const { fetchOrderDetails } = this.props;
        fetchOrderDetails(this.transformOrderParams(this.state));
    }

    render() {
        return (
            <div className="search">
                <div className="search-fields">
                    <Paper>
                        <TextField id="startDate" type="date" margin="dense" label="Start aaaaDate" value={this.state.startDate} />
                        <TextField id="endDate" type="date" margin="dense" label="End Date" value={this.state.endDate} />
                        <TextField id="clientName" type="text" margin="dense" label="Client Name" value={this.state.name} />
                        <TextField id="phone" type="text" margin="dense" label="Phone" value={this.state.phone} />
                        <TextField id="email" type="text" margin="dense" label="E-mail" value={this.state.email} />
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