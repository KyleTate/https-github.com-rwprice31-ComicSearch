import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/Route";
import MarvelLogo from './Marvelcomics.png';
import CBSText from './cbstext.png';

class nonLandingPages extends Component {

    render() {

        const Marvel = {
            marginTop: '40px',
            width: '220px',
            height: '175px',
            align: 'center',
            position: 'relative',
            left: '-25px',


        };

        const CBSStyle = {
           // marginRight: '400px',
            width: '230px',
            height: '115',
            position: 'fixed',
             left: '5px',
            // top: '-125px',
            // position: 'relative',
            // left: '-775px',
            // top: '-125px',
            padding: 0,
            // alignItems: 'left',
        };

        return (
            <div>
                <input id="Search-Bar" type="text" placeholder="Search by hero.." />
                <button id="Search-Submit" type="submit">Submit</button>

            <img style={Marvel} src  = {MarvelLogo} alt={"Marvel Universe"}/>

            <img style={CBSStyle} src = {CBSText} alt={"comic book search"}/>



            </div>


        // <BrowserRouter>
            //     <Route path="/hero" render={
            //         ()=>{
            //             return( <h1>Hero Page</h1>  )} }/>
            //
            //
            // </BrowserRouter>
        )
    }



}

export default nonLandingPages;