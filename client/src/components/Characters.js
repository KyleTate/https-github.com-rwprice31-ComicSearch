import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/Route";
import MarvelLogo from './Marvelcomics.png';
import DCLogo from './DCLogo.png';
import CBSText from './cbstext.png';

import {Link} from "react-router-dom";

class nonLandingPages extends Component {

    // renderPage() {
    //     if (whichPublisher == 'Marvel') {
    //         return 'MarvelLogo'
    //     }
    //     else {
    //         return 'DCLogo'
    //     }
    // }

    whichPublisher

    constructor(props) {
        super(props);
        this.state = {
            Publisher: this.props.location.state.Publisher,
            list: []
        }

        if (this.state.Publisher == 'Marvel') {
            this.whichPublisher = MarvelLogo;
        }
        else {
            this.whichPublisher = DCLogo;
        }
    }

    render() {

        const Logo = {
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
        console.log(this.props.location.state.Publisher)
        console.log(this.whichPublisher)

        return (

            <div>

            <img style={Logo} src = {this.whichPublisher} alt={"Comic Logo"}/>

            <Link to={{ pathname: "/"}}> <img style={CBSStyle} src = {CBSText} alt={"comic book search"}/> </Link>

            </div>

        )
    }



}

export default nonLandingPages;