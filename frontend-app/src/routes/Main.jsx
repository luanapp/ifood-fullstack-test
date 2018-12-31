import React from "react";
import { Switch, Route } from "react-router-dom"
import OrderDetails from "../components/OrderDetails.jsx"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={OrderDetails} />
            </Switch>
        </main>
    )
};

export default Main;