import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/Route";

class nonLandingPages extends Component {
    render() {

        return (
            <BrowserRouter>
                <Route path="/hero" render={
                    ()=>{
                        return( <h1>Hero Page</h1>  )} }/>


            </BrowserRouter>
        )
    }



}

export default nonLandingPages;