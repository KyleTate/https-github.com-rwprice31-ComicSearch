import React, {Component} from 'react'
import App from "../App";
import DCLogo from './DCLogo.png';
import MarvelLogo from './Marvelcomics.png';
import CBSText from './cbstext.png';
import MarvelBackground from './marvelsidebackground.png';
import {Link} from "react-router-dom";


class Publishers extends Component{
    render() {

        const MarvelStyle = {
         position: "relative",
         top: '-55px',
         backgroundColor: 'transparent',
         border: 'none',
    };

        const DCStyle = {
            position: "relative",
            top: '-20px',
            backgroundColor: 'transparent',
            border: 'none',
        };

        const  SelectPublisher = {
            textSizeAdjust: '20px',
            color: 'white',
        };

        const Imagesize = {
            width: '90%',
            height: '360px',
        };

        return(
    <div>
        <img id="CBS-Text" src = {CBSText} />

        <h1 id="Description-text">The purpose of this website is to help introduce new readers to comics and to be an easy way to
            find series of different characters
            Cover thumbnails are used for identification purposes only. All rights to cover images reserved
            by the respective copyright holders.</h1>

        <h2 style={SelectPublisher}>Select Publisher to Search By:</h2>

        <div className="Publisher-logo">
            <Link to="/Heros">
        <button className="Publisher-btn " style={DCStyle}><img  src = {DCLogo} alt={"DC Universe"}  onClick={this.publisherClick} /></button>
            </Link>
            <Link to="/Heros">
        <button className="Publisher-btn "  style={MarvelStyle}><img style={Imagesize} src  = {MarvelLogo} alt={"Marvel Universe"}  onClick={this.publisherClick} /></button>
            </Link>
        </div>
        {/*<img className="SideImage" src = {MarvelBackground} alt={"marvel comic pages"} />*/}

    </div>


        );
      }
    }
export default Publishers;