import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as actions from "../actions/orderDetails";

class OrderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.startDate = React.createRef();
        this.endDate = React.createRef();
        this.name = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
    }

    search() {
        const { fetchOrderDetails } = this.props;
        console.log(this.startDate.value);
        let searchParams = {
            startDate: (new Date(this.startDate.value)).toISOString(),
            endDate: (new Date(this.endDate.value)).toISOString(),
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
        };

        fetchOrderDetails(searchParams);
    }

    render() {
        return (
            <div className="search">
                <div className="search-fields">
                    <Paper>
                        <TextField name="startDate" type="date" margin="dense" label="Start Date" inputRef={e => this.startDate = e} />
                        <TextField name="endDate" type="date" margin="dense" label="End Date" inputRef={e => this.endDate = e} />
                        <TextField name="name"   type="text" margin="dense" label="Client Name" inputRef={e => this.name = e} />
                        <TextField name="phone" type="text" margin="dense" label="Phone" inputRef={e => this.phone = e} />
                        <TextField name="email" type="text" margin="dense" label="E-mail" inputRef={e => this.email = e} />
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