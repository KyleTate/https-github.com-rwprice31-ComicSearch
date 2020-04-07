import React from "react"
import { Route, Switch } from "react-router-dom"
import Heroes from "./Heros"
import Publishers from "./publishers";
// import { Homepage, Dog, Cat } from "./components"

const Routes = () => {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={Publishers} />
            <Route path="/Heroes" component={Heroes} />
            </Switch>
        </div>
    )
}

export default Routes